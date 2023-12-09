import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("hi ");
});

app.listen(5000, () => {
  console.log("server runing on port 5000");
});
