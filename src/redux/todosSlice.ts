import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
	todos: [{ id: '1', todo: 'some', completed: true }],
	filter: 'all'
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todoAdded: (state, action: PayloadAction<TodoType>) => {
			state.todos.push(action.payload)
		},
		todoToggled: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find(v => v.id === action.payload)
			if (todo) {
				todo.completed = !todo.completed
			}
		},
		completedTodosCleared: state => {
			state.todos = state.todos.filter(v => !v.completed)
		},
		filterChanged: (state, action: PayloadAction<FilterType>) => {
			state.filter = action.payload
		}
	}
})

export const { todoAdded, todoToggled, completedTodosCleared, filterChanged } = todosSlice.actions

export const selectAllTodos = (state: AppStateType) => state.todos.todos
export const selectCompletedTodos = (state: AppStateType) => state.todos.todos.filter(todo => todo.completed)
export const selectActiveTodos = (state: AppStateType) => state.todos.todos.filter(todo => !todo.completed)
export const selectFilter = (state: AppStateType) => state.todos.filter

export default todosSlice.reducer