"use client";

import { FormEvent, useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="waitlist-success card">
        <div className="waitlist-success-dot" aria-hidden="true" />
        <p>You&apos;re on the list ✦</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={onSubmit}>
      <input
        type="email"
        className="input-base"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        aria-label="Email"
      />
      <button type="submit" className="btn btn-primary">
        Join waitlist
      </button>
    </form>
  );
}
