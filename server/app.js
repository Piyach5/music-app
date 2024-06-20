import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  return res.json("Hello World");
});

app.listen(port, () => console.log(`Server is running at ${port}`));
