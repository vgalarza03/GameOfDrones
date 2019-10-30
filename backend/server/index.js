const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const { mongoose } = require("./database");

//Settings
app.set("port", process.env.PORT || 8080);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "https://localhost:4200" }));

//Routes
app.use("/api/game", require("./routes/game.routes"));
app.use("/api/round", require("./routes/round.routes"));

//Starting the server

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
