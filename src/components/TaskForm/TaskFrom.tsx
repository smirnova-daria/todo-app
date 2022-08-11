import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded, TodoType } from '../../redux/todosSlice';
import { v4 as uuidv4 } from 'uuid';

export const TaskForm: React.FC = () => {
	const [todoText, setTodoText] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newTodo: TodoType = {
			id: uuidv4(),
			todo: todoText,
			completed: false
		}
		dispatch(todoAdded(newTodo))
		setTodoText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type={'text'} onChange={(e) => setTodoText(e.target.value)} value={todoText} />
			<button>Add</button>
		</form>
	)
}