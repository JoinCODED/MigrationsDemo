module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define("Person", {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });

  Person.associate = (models) => {
    Person.hasMany(models.Bakery, {
      foreignKey: "personId",
    });
  };

  return Person;
};
