//dependencies
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Pet Shop");
  console.log("test");
});

app.get("/pets", (req, res) => {
  fs.readFile("pets.json", "utf-8", (errors, pets) => {
    if (error) {
      res.error(error);
    } else {
      res.json(JSON.parse(pets));
      res.status(200);
      res.end();
    }
  });
  // console.log("test");
  // res.status(200).json({ message: "/pets.json" });
});

app.get("/pets/:petId", (req, res) => {
  fs.readFile("pets.json", "utf-8", (errors, petsString) => {
    if (error) {
      res.sendStatus(500);
      res.end();
    } else {
      let pets = JSON.parse(petsString);
      if (!pets[req.params.petId]) {
        res.sendStatus(404, "not found");
      } else {
        res.json(pets[req.params.petId]);
        res.status(200);
        res.end();
      }
    }
  });
  // console.log("test");
  // res.status(200).json({ message: "/pets.json" });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
