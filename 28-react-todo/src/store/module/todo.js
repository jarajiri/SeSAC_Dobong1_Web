const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "자바 공부하기",
      done: true,
    },
    {
      id: 2,
      text: "데이터베이스 공부하기",
      done: false,
    },
  ],
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload) => ({
  type: CREATE,
  payload, //object {id,text}
});
export const done = (id) => ({
  type: DONE,
  id, //number
});
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              done: true,
            };
          } else {
            return li;
          }
        }),
      };

    default:
      return state;
  }
};
