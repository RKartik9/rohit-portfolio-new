import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}, ${site.discipline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#fcfbf9",
          color: "#10212a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -40,
            width: 300,
            height: 720,
            background: "linear-gradient(160deg, #ffb27a 0%, #ff7a2e 45%, #d9560f 100%)",
            transform: "skewX(-22deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
            <div
              style={{
                display: "flex",
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#ff7a2e",
                marginRight: 14,
              }}
            />
            <span style={{ fontWeight: 700 }}>Rohit</span>
            <span style={{ fontStyle: "italic", marginLeft: 8 }}>Kartik</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 132, lineHeight: 0.95, letterSpacing: -5, fontWeight: 700 }}>
            <span style={{ display: "flex" }}>
              <span style={{ color: "#d9560f" }}>Products</span>&nbsp;that
            </span>
            <span style={{ display: "flex" }}>
              feel&nbsp;<span style={{ fontStyle: "italic", fontWeight: 400 }}>right</span>.
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#5f6d74" }}>
            {site.name} · {site.role} · {site.discipline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
