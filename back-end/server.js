const Express = require("express");
const Path = require("path");

const App = Express();

App.use(Express.static(Path.join(__dirname, "../dist")));

App.get("*", (req, res) => {
  res.sendFile(Path.resolve(__dirname, "../", "dist", "index.html"));
});

App.listen(5000, () => {
  console.log("server runing on port 5000");
});

module.exports = App;
