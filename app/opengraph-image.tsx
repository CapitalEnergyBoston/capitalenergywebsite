import { ImageResponse } from "next/og";

export const alt = "Capital Energy — Brand & go-to-market for climate tech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #071b33 0%, #0a2c52 55%, #0f4a63 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="7" fill="#0a2c52" />
            <path d="M5 25 L14 12 L20 19 L27 25 Z" fill="#6f98bd" />
            <path d="M3 25 L11 15 L16 20 L23 25 Z" fill="#ffffff" />
            <path
              d="M4 20 L10 15 L14 17 L20 9 L28 12"
              stroke="#17cf9a"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            Capital Energy
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#7fe6c8",
            }}
          >
            Marketing for climate tech
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 960,
            }}
          >
            Building from scratch or scaling fast?
          </div>
          <div style={{ fontSize: 32, color: "#b8ccdf", maxWidth: 900 }}>
            We help climate tech companies translate complex work into
            compelling brands.
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            height: 8,
            width: 240,
            borderRadius: 8,
            background: "linear-gradient(90deg, #17cf9a, #4e7ca4)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
