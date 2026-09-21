import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ContactForm from "./ContactForm";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Test User" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello" } });
}

describe("ContactForm", () => {
  beforeEach(() => {
    pushMock.mockClear();
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("does not call the network when the honeypot field is filled", async () => {
    render(<ContactForm />);

    // The honeypot has no visible label (it's meant to fool bots, not humans),
    // so it's grabbed by its `name` attribute instead.
    const honeypot = document.querySelector('input[name="company"]') as HTMLInputElement;
    fireEvent.change(honeypot, { target: { value: "I am a bot" } });

    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
    });

    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits to Formspree and shows a success message when the honeypot is empty", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ ok: true });

    render(<ContactForm />);
    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
    });
  });

  it("shows an error message when the submission fails", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ ok: false });

    render(<ContactForm />);
    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("schedules a redirect home 2.5s after a successful submission", async () => {
    const setTimeoutSpy = vi.spyOn(global, "setTimeout");
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ ok: true });

    render(<ContactForm />);
    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
    });

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 2500);
    setTimeoutSpy.mockRestore();
  });
});
