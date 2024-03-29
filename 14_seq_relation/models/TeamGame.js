const TeamGame = (sequelize, DataTypes) => {
  return sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = TeamGame;
