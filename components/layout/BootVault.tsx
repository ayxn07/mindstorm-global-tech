export default function BootVault() {
  return (
    <div
      id="boot-vault"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 250,
        backgroundColor: "#000",
        overflow: "hidden",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(215,191,94,0.05), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(110deg, #050402 0%, #0a0905 30%, #14110a 65%, #1a1610 92%, #0c0a06 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(-110deg, #050402 0%, #0a0905 30%, #14110a 65%, #1a1610 92%, #0c0a06 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          height: "100%",
          width: "1px",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(215,191,94,0.45) 25%, rgba(215,191,94,0.55) 50%, rgba(215,191,94,0.45) 75%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "auto 0 56px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-cinzel), serif",
          color: "#D7BF5E",
          fontSize: "clamp(0.625rem, 0.18vw + 0.58rem, 0.875rem)",
          letterSpacing: "clamp(0.18em, 0.06vw + 0.16em, 0.36em)",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              display: "inline-block",
              height: "1px",
              width: "40px",
              backgroundColor: "rgba(215,191,94,0.7)",
            }}
          />
          <span>Mindstorm · Tech Global</span>
          <span
            style={{
              display: "inline-block",
              height: "1px",
              width: "40px",
              backgroundColor: "rgba(215,191,94,0.7)",
            }}
          />
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(0.625rem, 0.18vw + 0.58rem, 0.875rem)",
            letterSpacing: "clamp(0.18em, 0.06vw + 0.16em, 0.36em)",
          }}
        >
          Verifying credentials
        </div>
      </div>
    </div>
  );
}
