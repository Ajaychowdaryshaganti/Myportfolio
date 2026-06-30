"use client";

import { useEffect } from "react";

export function useVisitorNotify() {
  useEffect(() => {
    // Only fire once per session
    if (sessionStorage.getItem("notified")) return;
    sessionStorage.setItem("notified", "1");

    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        page: window.location.pathname,
      }),
    }).catch(() => {
      // silent — never block the user
    });
  }, []);
}
