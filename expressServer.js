const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const listener = () => `Listening on port ${port}!`;
app.listen(port);

app.get("/pets", (req, res) => {
  console.log("test");
  res.status(200).json({ message: "/pets.json" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not found" } });
});
