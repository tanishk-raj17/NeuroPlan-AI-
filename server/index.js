const express =
  require("express");

const cors =
  require("cors");

require("dotenv").config();

const connectDB =
  require("./config/db");

const userRoutes =
  require("./routes/userRoutes");

const plannerRoutes =
  require("./routes/plannerRoutes");

const aiRoutes =
  require("./routes/aiRoutes");

const app =
  express();

connectDB();

const weaknessRoutes =
  require("./routes/weaknessRoutes");

app.use(cors());
app.use(express.json());



app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/planner",
  plannerRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/weakness",
  weaknessRoutes
);

app.get("/", (req, res) => {

  res.send(
    "Neuroplan AI Backend Running 🚀"
  );
});

const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});