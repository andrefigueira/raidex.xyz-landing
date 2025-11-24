import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RAIDEX - Infrastructure for AI Agents to Raid DeFi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Fetch the logo
  const logoData = await fetch(
    new URL("../public/logo.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
          }}
        >
          {/* Logo */}
          <img
            src={`data:image/png;base64,${Buffer.from(logoData).toString("base64")}`}
            width={120}
            height={120}
            style={{ marginBottom: 24 }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            RAIDEX
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Infrastructure for AI Agents to Raid DeFi
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 40,
            }}
          >
            {["No Keys", "No Complexity", "Just Results"].map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#71717a",
                  fontSize: 20,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#52525b",
          }}
        >
          raidex.xyz
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
