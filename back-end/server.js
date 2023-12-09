import Express from "express";

const App = Express();

App.get("/", (req, res) => {
  res.send("hi ");
});

App.listen(5000, () => {
  console.log("server runing on port 5000");
});

export default App;
