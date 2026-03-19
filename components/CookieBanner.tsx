"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "sleep-sheep-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const close = () => {
    window.localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>We use cookies to improve your experience.</p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-primary" onClick={close}>
          Accept
        </button>
        <a href="/cookies" className="btn btn-outline" onClick={close}>
          Manage preferences
        </a>
      </div>
    </div>
  );
}
