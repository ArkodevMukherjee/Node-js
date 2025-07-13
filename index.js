// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("trust proxy",true);

app.get("/", (req, res) => {
  console.log(req.ips)
  res.send(`Hello from server on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
