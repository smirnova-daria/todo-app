import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { todosApi } from "../api";
import { AppStateType } from "./store";

export interface TodosState {
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
		},
		todosSet: (state, action: PayloadAction<Array<TodoType>>) => {
			state.todos = action.payload
		},

	},
})

export const getTodos = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
	const response = todosApi.getTodos()
	dispatch(todosSlice.actions.todosSet(response))
}
export const addTodo = (todo: TodoType): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch, getState) => {
	dispatch(todosSlice.actions.todoAdded(todo))
	todosApi.setTodos(getState().todos.todos)
}
export const toggleTodo = (id: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch, getState) => {
	dispatch(todosSlice.actions.todoToggled(id))
	todosApi.setTodos(getState().todos.todos)
}
export const clearCompletedTodos = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch, getState) => {
	dispatch(todosSlice.actions.completedTodosCleared())
	todosApi.setTodos(getState().todos.todos)
}

export const { todoAdded, todoToggled, completedTodosCleared, filterChanged, todosSet } = todosSlice.actions

export const selectAllTodos = (state: AppStateType) => state.todos.todos
export const selectCompletedTodos = (state: AppStateType) => state.todos.todos.filter(todo => todo.completed)
export const selectActiveTodos = (state: AppStateType) => state.todos.todos.filter(todo => !todo.completed)
export const selectFilter = (state: AppStateType) => state.todos.filter

export default todosSlice.reducer