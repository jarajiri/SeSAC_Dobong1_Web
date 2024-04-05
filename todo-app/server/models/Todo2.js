const TodoModel2 = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo2",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0, //false=0 true=1
      },
    },
    {
      tableName: "todo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Todo;
};

module.exports = TodoModel2;
