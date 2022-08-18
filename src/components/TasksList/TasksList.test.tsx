import { fireEvent, render, screen } from "@testing-library/react"
import { TasksList } from "./TasksList"
import * as reduxHooks from 'react-redux'
import { TodoType } from "../../redux/todosSlice"
import * as actions from "../../redux/todosSlice"

jest.mock('react-redux')

const mockedSelect: any = jest.spyOn(reduxHooks, 'useSelector')
const mockedDispatch: any = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()

const tasks: Array<TodoType> = [
	{ id: '1', todo: 'component test 1', completed: false },
	{ id: '2', todo: 'component test 2', completed: true },
]

describe('TasksList component', () => {
	it('should create TasksList with empty todos', () => {
		mockedSelect.mockReturnValue([])
		mockedDispatch.mockReturnValue(dispatch)

		const view = render(<TasksList />)

		expect(view).toMatchSnapshot()
	})
	// it('should create TasksList with todo items', () => {
	// 	mockedSelect.mockReturnValue(tasks)
	// 	mockedDispatch.mockReturnValue(dispatch)

	// 	const view = render(<TasksList />)

	// 	expect(view).toMatchSnapshot()

	// })
})

