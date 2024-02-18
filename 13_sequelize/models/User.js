const User = (Sequelize, DataTypes) => {
  // CREATE TABLE user (
  //     id int PRIMARY KEY AUTO_INCREMENT,
  //     userid VARCHAR(20) NOT NULL,
  //     name VARCHAR(20) NOT NULL,
  //     pw VARCHAR(20) NOT NULL
  // );

  const model = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = User;
