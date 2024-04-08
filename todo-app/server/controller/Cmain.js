const { QueryTypes } = require("sequelize");
const { Todo, sequelize } = require("../models");
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
    if (todoAll.length === 0) {
      // 데이터가 없을 경우 auto_increment 값 초기화
      const init = await sequelize.query("ALTER TABLE Todo AUTO_INCREMENT = 1");
      res.json(todoAll);
    } else res.json(todoAll);
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
// PATCH /api-server/todo/:todoId
exports.patchTodo = async (req, res) => {
  /*   try {
    console.log(req.params.todoId);
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
  } */

  try {
    const { todoId } = req.params;
    console.log(req.params);
    const [isUpdated] = await Todo.update(
      /* 
      sequelize import 해와야 합니다.
      sequelize.literal: query를 날릴(?) 수 있도록 도와줌
      */
      { done: sequelize.literal("NOT done") }, // 현재값과 반대로 하기 위해서 실제 sql query문 사용
      { where: { id: todoId } }
    );
    isUpdated
      ? res.status(200).send({ isSuccess: true })
      : res.status(404).send({ isSuccess: false }); //잘못된 todoId 보낼 경우
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR!, 관리자에게 문의하세요");
  }
};
// DELETE /api-server/todo/:todoId
exports.deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    // console.log(todoId);
    const isDeleted = await Todo.destroy({ where: { id: todoId } });
    // console.log(isDeleted);
    isDeleted
      ? res.status(200).send({ isSuccess: true })
      : res.status(404).send({ isSuccess: false }); //잘못된 todoId 보낼 경우
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR! 관리자에게 문의하세요");
  }
};

// [추가] 내용수정하기
// /api-server/content
exports.patchContent = async (req, res) => {
  try {
    const { id, text } = req.body;
    console.log("patchConent req.body.id === ", id);
    const [isUpdated] = await Todo.update({ text }, { where: { id } });
    console.log(isUpdated);
    isUpdated > 0
      ? res.status(200).send({ isSuccess: true })
      : res.status(200).send({ isSuccess: false });
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR! 관리자에게 문의하세요");
  }
};
