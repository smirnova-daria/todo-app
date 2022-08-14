import { AppStateType } from "./store";
import todosReducer, { selectAllTodos, selectActiveTodos, selectCompletedTodos, selectFilter, TodosState, todoAdded, todoToggled, completedTodosCleared, filterChanged, todosSet } from "./todosSlice";

const testAppState: AppStateType = {
	todos: {
		todos: [
			{ id: '11', todo: 'write test 1', completed: false },
			{ id: '22', todo: 'write test 2', completed: true },
			{ id: '33', todo: 'write test 3', completed: false },
			{ id: '44', todo: 'write test 4', completed: true },
		],
		filter: 'completed'
	}
}

describe('redux selectors', () => {
	const todos = testAppState.todos.todos

	it('should select all todos from state', () => {
		expect(selectAllTodos(testAppState)).toEqual(todos)
	})

	it('should be select completed todos from state', () => {
		expect(selectCompletedTodos(testAppState)).toEqual([todos[1], todos[3]])
	})

	it('should be select active todos from state', () => {
		expect(selectActiveTodos(testAppState)).toEqual([todos[0], todos[2]])
	})

	it('should be select filter from state', () => {
		expect(selectFilter(testAppState)).toMatch(/completed/)
	})
})

describe('todos reducer', () => {
	const testTodosState: TodosState = {
		todos: testAppState.todos.todos,
		filter: 'all',

	}
	const testInitialTodosState: TodosState = {
		todos: [],
		filter: 'all'
	}

	it('should return default state when pass an empty action', () => {
		const result = todosReducer(undefined, { type: '' })
		expect(result).toEqual(testInitialTodosState)
	})

	it('should add new todo item with "addTodo" action', () => {
		const action = { type: todoAdded.type, payload: { id: '0', todo: 'new task', completed: false } }
		const result = todosReducer(testTodosState, action)

		expect(result.todos.length).toBe(5)
		expect(result.todos[4].id).toBe('0')
		expect(result.todos[4].todo).toBe('new task')
		expect(result.todos[4].completed).toBe(false)
	})

	it('should toggle todo completed status with "toggleTodo" action', () => {
		const action1 = { type: todoToggled.type, payload: '11' }
		const action2 = { type: todoToggled.type, payload: '44' }
		const result1 = todosReducer(testTodosState, action1)
		const result2 = todosReducer(testTodosState, action2)

		expect(result1.todos[0].completed).toBe(true)
		expect(result2.todos[0].completed).toBe(false)
	})

	it('should clear completed todos with "completedTodosCleared" action', () => {
		const action = { type: completedTodosCleared.type }
		const result = todosReducer(testTodosState, action)
		const expectedTodos = [testTodosState.todos[0], testTodosState.todos[2]]
		const completedTodos = selectCompletedTodos({ todos: result })

		expect(result.todos).toEqual(expectedTodos)
		expect(completedTodos).toEqual([])
	})

	it('should change filter with "filterChanged" action', () => {
		const action = { type: filterChanged.type, payload: 'active' }
		const result = todosReducer(testTodosState, action)

		expect(result.filter).toBe('active')
	})

	it('should set todos to state with "todosSet" action', () => {
		const action = { type: todosSet.type, payload: testTodosState.todos }
		const result = todosReducer(testInitialTodosState, action)
		expect(result).toEqual(testTodosState)
	})
})