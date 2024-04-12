import { Todo, TodoState } from "../../types/interface";

// interface Action {
//   type: string;
//   id?: number;
//   payload?: {
//     id: number;
//     text: string;
//   };
// }

const initialState: TodoState = {
  list: [],
};
const INIT = "todo/INIT" as const;
const CREATE = "todo/CREATE"; // as const는 생략해도 상수이기때문에 문자열 리터럴타입이 지정된다
const DONE = "todo/DONE" as const;
const DELETE = "todo/DELETE" as const;
const UPDATE = "todo/UPDATE" as const;

let count = initialState.list.length;
initialState["nextID"] = count;

export const init = (data: Todo[]) => ({
  type: INIT,
  data, //object {id,text,done}
});

export const create = (payload: { id: number; text: string }) => ({
  //payload = { id: nextID, text: todoRef.current.value }
  type: CREATE,
  payload: payload, //object {id,text}
});
export const done = (id: number) => ({
  type: DONE,
  id: id, //number
});
export const destroy = (id: number) => ({
  type: DELETE,
  id: id,
});
export const update = (id: number, text: string) => ({
  type: UPDATE,
  id,
  text,
});

interface Create {
  type: typeof CREATE;
  payload: { id: number; text: string };
}
interface Done {
  type: typeof DONE;
  id: number;
}
interface Init {
  type: typeof INIT;
  data: Todo[];
}
interface Delete {
  type: typeof DELETE;
  id: number;
}
interface Update {
  type: typeof UPDATE;
  id: number;
  text: string;
}
type Action = Create | Done | Init | Delete | Update;

export const todoReducer = (
  state: TodoState = initialState,
  action: Action
) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        list: action.data,
        nextID:
          action.data.length === 0
            ? 1
            : action.data[action.data.length - 1].id + 1,
      };
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
    case DELETE:
      return {
        ...state,
        list: state.list.filter((li) => li.id !== action.id),
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((li) =>
          li.id === action.id
            ? {
                ...li,
                text: action.text,
              }
            : li
        ),
      };
    default:
      return state;
  }
};
