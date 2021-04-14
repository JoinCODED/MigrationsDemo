const express = require("express");
const { Person, Bakery } = require("./db/models");
const db = require("./db/models");

const app = express();

app.get("/people", async (req, res, next) => {
  const persons = await Person.findAll({
    include: {
      model: Bakery,
    },
  });
  res.json(persons);
});

const PORT = 8000;

// db.sequelize.authenticate();

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
