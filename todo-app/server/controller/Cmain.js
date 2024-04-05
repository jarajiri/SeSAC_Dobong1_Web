const { Todo } = require("../models");
//test 용 api
exports.getIndex = (req, res) => {
  res.send("response from api server [GET /api-server]");
};

exports.getUser = (req, res) => {
  res.send("response from api server [GET /api-server/user]");
};

// GET /api-server/todos
exports.getTodos = async (req, res) => {
  try {
    const todoAll = await Todo.findAll(); //[{id,text,done}]
    res.json(todoAll);
  } catch (error) {
    console.log("server error", error);
    res.status(500).send("server error, 관리자는 집에 갔습니다");
  }
};
// POST /api-server/todo
exports.postTodo = async (req, res) => {
  /* 
    {
      id: 모델 정의 시 auto_increment 속성 추가해둔 상태(x)
      done: 모델 정의 시 false(0)를 defaultValue 처리해둔 상태(x)
      text: (o)
    }
  */
  try {
    const { text } = req.body;
    await Todo.create({
      text: text,
    }); //반환값이 필요가 없음
    res.send({ isSuccess: true });
  } catch (error) {
    console.log("server error", error);
    res.status(500).send("server error, 관리자는 집에 갔습니다");
  }
};
exports.patchTodo = async (req, res) => {
  try {
    // console.log(req.params.todoId); //1
    const { done } = await Todo.findOne({
      where: {
        id: req.params.todoId,
      },
    });

    const isSuccess = await Todo.update(
      {
        done: !done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );
    console.log("DB반영됨?", isSuccess);
    isSuccess > 0
      ? res.send({ isSuccess: true })
      : res.send({ isSuccess: false });
  } catch (error) {
    console.log("server error", error);
    res.status(500).send("server error, 관리자는 집에 갔습니다");
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const isSuccess = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });
    console.log("DB반영됨?", isSuccess);
    isSuccess > 0
      ? res.send({ isSuccess: true })
      : res.send({ isSuccess: false });
  } catch (error) {
    console.log("server error", error);
    res.status(500).send("server error, 관리자는 집에 갔습니다");
  }
};
