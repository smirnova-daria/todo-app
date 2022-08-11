import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { AppStateType } from "./store";

interface TodosState {
	todos: Array<TodoType> | null
}

type TodoType = {
	id: string,
	todo: string,
	done: boolean
}

const initialState: TodosState = {
	todos: [
		{ id: uuidv4(), todo: 'Pet project', done: false },
		{ id: uuidv4(), todo: 'Awesome code', done: true },
		{ id: uuidv4(), todo: 'Tests', done: false }
	]
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos?.push({ id: uuidv4(), todo: action.payload, done: false })
		},
		changeTodoStatus: (state, action: PayloadAction<string>) => {
			const status = state.todos?.find(v => v.id === action.payload)?.done
			const todo = state.todos?.find(v => v.id === action.payload)
			if (status !== undefined && todo) {
				todo.done = !status
			}
		},
		removeCompletedTodos: state => {
			state.todos?.filter(v => v.done)
		}
	}
})

export const { addTodo, changeTodoStatus, removeCompletedTodos } = todosSlice.actions

export const selectTodos = (state: AppStateType) => state.todos.todos

export default todosSlice.reducer