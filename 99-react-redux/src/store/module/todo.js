const init = {
  list: [
    {
      id: 0,
      text: "111",
      done: false,
    },
    {
      id: 1,
      text: "222",
      done: false,
    },
    {
      id: 2,
      text: "333",
      done: false,
    },
  ],
};

let idx = init.list.length;
init["nextID"] = idx;

export const todo = (state = init, action) => {
  switch (action.type) {
    case "todo/CREATE":
      if (action.payload.text.trim() === "") return state;
      return {
        ...state, // list라는 키값안에 있는 배열 요소들을 나열 이름은 그대로 list 키값
        list: state.list.concat({
          // 키값에 배열 요소 추가
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case "todo/DONE":
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
