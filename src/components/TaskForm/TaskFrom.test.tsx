import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TaskForm } from "./TaskFrom"
import * as reduxHooks from 'react-redux'


jest.mock('react-redux')

const dispatch = jest.fn()
const mockedDispatch: any = jest.spyOn(reduxHooks, 'useDispatch')


describe('TaskForm component', () => {
	test('after creation should be displayed', () => {
		mockedDispatch.mockReturnValue(dispatch)

		render(<TaskForm />)

		const input = screen.getByLabelText('Что нужно сделать?')
		const button = screen.getByRole('button')

		expect(input).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})

	test('typing text should be displayed', () => {
		mockedDispatch.mockReturnValue(dispatch)

		render(<TaskForm />)

		const input = screen.getByRole('textbox')

		userEvent.type(input, 'learn react')

		const text = screen.getByDisplayValue('learn react')

		expect(text).toBeInTheDocument()
	})

	test('shouldn\'t add task with empty input', () => {
		mockedDispatch.mockReturnValue(dispatch)

		render(<TaskForm />)

		const button = screen.getByRole('button')

		expect(button).toBeDisabled()
	})

	test('should add task after submit', () => {
		mockedDispatch.mockReturnValue(dispatch)

		render(<TaskForm />)
		const input = screen.getByRole('textbox')
		const button = screen.getByRole('button')

		userEvent.type(input, 'learn react')
		userEvent.click(button)

		expect(dispatch).toBeCalled()
	})

})