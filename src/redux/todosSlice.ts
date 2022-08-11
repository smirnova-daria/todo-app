import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStateType } from "./store";

interface TodosState {
	todos: Array<TodoType>
}

export type TodoType = {
	id: string,
	todo: string,
	completed: boolean
}

const initialState: TodosState = {
	todos: [{ id: '1', todo: 'some', completed: true }]
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TodoType>) => {
			state.todos.push(action.payload)
		},
		changeTodoStatus: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find(v => v.id === action.payload)
			if (todo) {
				todo.completed = !todo.completed
			}
		},
		removeCompletedTodos: state => {
			state.todos = state.todos.filter(v => !v.completed)
		}
	}
})

export const { addTodo, changeTodoStatus, removeCompletedTodos } = todosSlice.actions

export const selectTodos = (state: AppStateType) => state.todos.todos

export default todosSlice.reducer