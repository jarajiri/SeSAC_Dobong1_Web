const Team = (sequelize, DataTypes) => {
  return sequelize.define(
    "Team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = Team;
