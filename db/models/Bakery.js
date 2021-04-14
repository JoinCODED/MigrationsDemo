module.exports = (sequelize, DataTypes) => {
  const Bakery = sequelize.define("Bakery", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Bakery.associate = (models) => {
    Bakery.belongsTo(models.Person, {
      as: "person",
      foreignKey: "personId",
    });
  };

  return Bakery;
};
