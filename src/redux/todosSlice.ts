import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todosApi } from "../api";
import { AppStateType } from "./store";

interface TodosState {
	todos: Array<TodoType>
	filter: FilterType
}

export type TodoType = {
	id: string,
	todo: string,
	completed: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

const initialState: TodosState = {
	todos: [],
	filter: 'all'
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todoAdded: (state, action: PayloadAction<TodoType>) => {
			state.todos.push(action.payload)
			todosApi.setTodos(state.todos)
		},
		todoToggled: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find(v => v.id === action.payload)
			if (todo) {
				todo.completed = !todo.completed
			}
			todosApi.setTodos(state.todos)
		},
		completedTodosCleared: state => {
			state.todos = state.todos.filter(v => !v.completed)
			todosApi.setTodos(state.todos)
		},
		filterChanged: (state, action: PayloadAction<FilterType>) => {
			state.filter = action.payload
		},
		todosFetched: (state) => {
			state.todos = todosApi.getTodos()
		}
	},

})

export const { todoAdded, todoToggled, completedTodosCleared, filterChanged, todosFetched } = todosSlice.actions

export const selectAllTodos = (state: AppStateType) => state.todos.todos
export const selectCompletedTodos = (state: AppStateType) => state.todos.todos.filter(todo => todo.completed)
export const selectActiveTodos = (state: AppStateType) => state.todos.todos.filter(todo => !todo.completed)
export const selectFilter = (state: AppStateType) => state.todos.filter

export default todosSlice.reducer