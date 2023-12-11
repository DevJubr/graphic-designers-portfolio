const express = require("express");
const Path = require("path");
const app = express();

app.use(express.static(Path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(Path.resolve(__dirname, "../", "dist", "index.html"));
});
app.get("/", (req, res) => {
  res.send("<h1>hello world!</h1>");
});

app.listen(5000, () => {
  console.log("app listen on port 5000");
});

module.exports = app;
