"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpaplvd";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: a hidden field a human never fills in. If it has a value,
    // it's almost certainly a bot, so we quietly pretend to succeed.
    if (formData.get("company")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="form-success">
        Thanks for reaching out. I&apos;ll get back to you within 24 to 48
        hours.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="reason">What&apos;s this about</label>
        <select id="reason" name="reason" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="Full-time opportunity">Full-time opportunity</option>
          <option value="Freelance project">Freelance project</option>
          <option value="General">General</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      {status === "error" && (
        <p className="form-error">
          Something went wrong sending that. Try again, or email me directly
          above.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
