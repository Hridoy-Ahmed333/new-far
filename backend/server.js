import express from "express";
import data from "./data.js";
const app = express();
app.get("/api/product", (req, res) => {
  res.send(data.product);
});
//test
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
