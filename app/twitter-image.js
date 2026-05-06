import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(1200px 600px at 12% 0%, #1d3b63 0%, #0b1220 55%, #060a12 100%)",
          color: "#ffffff"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#16283d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 700
            }}
          >
            φ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, opacity: 0.9 }}>Физика Просто</div>
            <div style={{ fontSize: 18, opacity: 0.7 }}>платформа по физике</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 980 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 800 }}>
            Физика — просто.
            <br />
            Когда тема собрана целиком.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.25, opacity: 0.86 }}>
            Теория, формулы, задачи и самопроверка
          </div>
        </div>

        <div style={{ fontSize: 22, opacity: 0.75 }}>Физика Просто</div>
      </div>
    ),
    size
  );
}

