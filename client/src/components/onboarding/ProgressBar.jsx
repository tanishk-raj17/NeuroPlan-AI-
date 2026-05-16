export default function ProgressBar({ step }) {

  const steps = [1, 2, 3, 4, 5, 6];

  return (

    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "30px",
      }}
    >

      {steps.map((item) => (

        <div
          key={item}

          style={{
            flex: 1,
            height: "8px",
            borderRadius: "999px",

            background:
              item <= step
                ? "#8b5cf6"
                : "#2a2a2a",
          }}
        />

      ))}

    </div>
  );
}