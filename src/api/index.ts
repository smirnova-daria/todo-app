import { TodoType } from "../redux/todosSlice"

export const todosApi = {
	getTodos: () => {
		const todos = localStorage.getItem('todos/list')
		return todos ? JSON.parse(todos) : []
	},
	setTodos: (todos: Array<TodoType>) => {
		localStorage.setItem('todos/list', JSON.stringify(todos))
	}
}