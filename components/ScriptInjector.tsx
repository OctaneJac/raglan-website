// components/ScriptInjector.tsx
"use client";

import { useEffect } from "react";

export default function ScriptInjector() {
  useEffect(() => {
    fetch(
      "https://3577b6869e6d.ngrok-free.app/static/tracker.js?funnel_id=e49262ca-ed87-47bb-ade6-545a020f9b86",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    )
      .then((res) => res.text())
      .then((code) => {
        const script = document.createElement("script");
        script.textContent = code;
        document.body.appendChild(script);
      })
      .catch((err) => {
        console.error("Failed to inject tracker.js", err);
      });
  }, []);

  return null;
}
