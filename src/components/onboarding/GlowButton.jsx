function GlowButton({
  text,
  onClick
}) {

  return (

    <button

      onClick={onClick}

      style={{

        width: "100%",

        padding: "14px",

        borderRadius: "16px",

        border: "none",

        background:
          "linear-gradient(to right, #3b82f6, #8b5cf6)",

        color: "white",

        fontWeight: "bold",

        cursor: "pointer",

      }}
    >

      {text}

    </button>

  );
}

export default GlowButton;