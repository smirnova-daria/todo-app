import { render, screen } from "@testing-library/react"
import { TodoType } from "../../redux/todosSlice"
import { TaskItem } from "./TaskItem"
import userEvent from "@testing-library/user-event"

const task: TodoType = { id: '1', todo: 'react', completed: false }

const handleChange = jest.fn()

describe('ListItem component', () => {
	test('after creation text should be displayed', () => {
		render(<TaskItem task={task} handleToggleTask={handleChange} />)

		const text = screen.getByText('react')

		expect(text).toBeInTheDocument()
	})

	test('after creation checkbox should be displayed', () => {
		render(<TaskItem task={task} handleToggleTask={handleChange} />)

		const checkbox = screen.getByRole('checkbox')

		expect(checkbox).not.toBeChecked()
		expect(checkbox).toBeEnabled()
	})

	test('callback should be called', () => {
		render(<TaskItem task={task} handleToggleTask={handleChange} />)

		const checkbox = screen.getByRole('checkbox')

		userEvent.click(checkbox)

		expect(handleChange).toBeCalled()
		expect(handleChange).toBeCalledWith('1')
	})
})