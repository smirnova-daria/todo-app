import { TodoType } from "../redux/todosSlice"

export const todosApi = {
	getTodos: (): Array<TodoType> => {
		const todos = localStorage.getItem('todos/list')
		return todos ? JSON.parse(todos) : []
	},
	setTodos: (todos: Array<TodoType>): void => {
		localStorage.setItem('todos/list', JSON.stringify(todos))
	}
}