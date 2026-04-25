import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

let cinzelFontPromise: Promise<ArrayBuffer> | null = null;

async function loadCinzel(): Promise<ArrayBuffer | null> {
  if (!cinzelFontPromise) {
    cinzelFontPromise = (async () => {
      const cssRes = await fetch(
        "https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap",
        { headers: { "User-Agent": "Mozilla/5.0" } },
      );
      const css = await cssRes.text();
      const match = css.match(/src:\s*url\((https:[^)]+\.(?:woff2|woff|ttf))\)/);
      if (!match) throw new Error("Could not extract Cinzel font URL");
      const fontRes = await fetch(match[1]);
      return fontRes.arrayBuffer();
    })().catch(() => {
      cinzelFontPromise = null;
      return null as unknown as ArrayBuffer;
    });
  }
  try {
    const data = await cinzelFontPromise;
    return data ?? null;
  } catch {
    return null;
  }
}

export async function renderOg({
  eyebrow,
  heading,
  sublabel,
}: {
  eyebrow: string;
  heading: string;
  sublabel?: string;
}) {
  const cinzel = await loadCinzel();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#000000",
          backgroundImage:
            "radial-gradient(ellipse at top right, rgba(215,191,94,0.22) 0%, transparent 55%), radial-gradient(ellipse at bottom left, rgba(215,191,94,0.12) 0%, transparent 60%)",
          padding: "72px 80px",
          position: "relative",
          fontFamily: cinzel ? "Cinzel" : "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#D7BF5E",
              boxShadow: "0 0 24px #D7BF5E",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#D7BF5E",
              fontWeight: 600,
            }}
          >
            {site.shortName.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "rgba(215,191,94,0.85)",
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            {eyebrow.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: heading.length > 60 ? 64 : 78,
              lineHeight: 1.05,
              color: "#FFFFFF",
              fontWeight: 600,
              letterSpacing: -1,
              maxWidth: 1040,
              textTransform: "uppercase",
            }}
          >
            {heading}
          </div>
          {sublabel ? (
            <div
              style={{
                fontSize: 28,
                color: "rgba(255,255,255,0.7)",
                marginTop: 32,
                maxWidth: 1040,
                lineHeight: 1.4,
                fontFamily: "serif",
              }}
            >
              {sublabel}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(215,191,94,0.3)",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 600,
            }}
          >
            {site.address.full}
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(215,191,94,0.85)",
              fontWeight: 600,
            }}
          >
            {site.domain}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: cinzel
        ? [{ name: "Cinzel", data: cinzel, weight: 600, style: "normal" }]
        : undefined,
    },
  );
}
