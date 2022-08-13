import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, TodoType } from '../../redux/todosSlice';
import { v4 as uuidv4 } from 'uuid';
import { IconButton, Paper, TextField } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Stack } from '@mui/system';

export const TaskForm: React.FC = () => {
	const [todoText, setTodoText] = useState('')
	const dispatch = useDispatch<any>()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (todoText) {
			const newTodo: TodoType = {
				id: uuidv4(),
				todo: todoText,
				completed: false
			}
			dispatch(addTodo(newTodo))
			setTodoText('')
		}
	}

	return (
		<Paper
			component={'form'}
			onSubmit={handleSubmit}
			sx={{ position: 'relative' }}
		>
			<Stack direction="row" spacing={2}>
				<TextField
					label="Что нужно сделать?"
					variant="outlined"
					color="warning"
					onChange={(e) => setTodoText(e.target.value)} value={todoText}
					sx={{ width: '100%' }}
				/>

				<IconButton
					type='submit'
					color="default"
					aria-label="add"
					sx={{ position: 'absolute', right: 5, top: 'calc(50% - 20px)' }}
					disabled={!todoText}
				>
					<KeyboardDoubleArrowRightIcon />
				</IconButton>
			</Stack>
		</Paper>
	)
}