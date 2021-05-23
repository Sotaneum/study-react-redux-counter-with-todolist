import { handleActions } from 'redux-actions';
import produce from 'immer';
import { INSERT, TOGGLE, REMOVE, CHANGE_INPUT } from '../actions/types';

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      done: true,
      text: '리덕스 기초 배우기',
    },
    {
      id: 2,
      done: false,
      text: '리액트와 리덕스 사용하기',
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
