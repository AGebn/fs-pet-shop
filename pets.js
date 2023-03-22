let fs = require("fs");

let option = process.argv[2];

switch (option) {
  case "read": {
    let selection = process.argv[3];

    fs.readFile("pets.json", "utf-8", function (error, data) {
      let pets = JSON.parse(data);

      if (error) {
        console.log(error);
      } else if (selection < 0 || selection > pets.length) {
        console.log(`Usage: node pets.js read INDEX`);
      } else if (selection === undefined) {
        console.log(pets);
      } else {
        console.log(pets[selection]);
      }
    });
    break;
  }

  case "create": {
    let age = process.argv[3];
    let kind = process.argv[4];
    let name = process.argv[5];
    let newPet = { age: Number(age), kind: kind, name: name };

    if (name === undefined) {
      console.log("Usage: node pets.js create AGE KIND NAME");
      return;
    }

    fs.readFile("pets.json", "utf-8", function (error, data) {
      let pets = JSON.parse(data);

      if (error) {
        console.log(error);
      } else {
        pets.push(newPet);
        console.log(pets);
        fs.writeFile("pets.json", JSON.stringify(pets), function (error) {
          if (error) {
            console.log(error);
          } else {
            console.log("write complete");
          }
        });
      }
    });
    break;
  }

  default: {
    console.log("Usage: node pets.js [read | create | update | destroy]");
  }
}
