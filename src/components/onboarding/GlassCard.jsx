function GlassCard({ children }) {

  return (

    <div
      style={{

        width: "100%",

        maxWidth: "420px",

        padding: "32px",

        borderRadius: "30px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.1)",

        backdropFilter: "blur(12px)",

        color: "white",

      }}
    >

      {children}

    </div>

  );
}

export default GlassCard;