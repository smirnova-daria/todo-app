import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';

export const TaskForm: React.FC = () => {
	const [todoText, setTodoText] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(addTodo(todoText))
		setTodoText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type={'text'} onChange={(e) => setTodoText(e.target.value)} value={todoText} />
			<button>Add</button>
		</form>
	)
}