function Background({ children }) {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >

      {children}

    </div>

  );
}

export default Background;