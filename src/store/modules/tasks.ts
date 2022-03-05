import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from 'types';
import type { RootState } from 'store';

interface ITaskState {
  tasks: ITask[];
}

const initialState: ITaskState = {
  tasks: [
    { id: 1, todo: 'TDD 공부하기' },
    { id: 2, todo: 'voice 구현하기' },
  ],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        tasks: [...state.tasks, { id: 3, todo: action.payload }],
      };
    },
  },
});

export const { addTodo } = taskSlice.actions;

export default taskSlice.reducer;
