const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

//Config
const PORT = process.env.PORT || 3000;

// Middleweares
app.use(cors());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("API funcionando en el puerto " + PORT);
});
