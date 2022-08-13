import { Checkbox, FormControlLabel, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllTodos, selectFilter, selectCompletedTodos, selectActiveTodos, getTodos, toggleTodo } from '../../redux/todosSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import s from './TasksList.module.css'

export const TasksList: React.FC = () => {
	const allTasks = useSelector(selectAllTodos)
	const completedTasks = useSelector(selectCompletedTodos)
	const activeTasks = useSelector(selectActiveTodos)
	const [tasks, setTasks] = useState(allTasks)
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch<any>()

	const handleToggleTask = (id: string) => {
		dispatch(toggleTodo(id))
	}
	useEffect(() => {
		dispatch(getTodos())
	}, [])
	useEffect(() => {
		switch (filter) {
			case 'all':
				setTasks(allTasks)
				break
			case 'active':
				setTasks(activeTasks)
				break
			case 'completed':
				setTasks(completedTasks)
				break
		}
	}, [filter, allTasks, completedTasks, activeTasks])

	return (
		<section className={s.section}>
			<h3 className={s.title}>{filter} tasks</h3>
			<List>
				{tasks.map(t =>
					<ListItem key={t.id} sx={{ padding: '0 15px' }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={t.completed} onClick={() => { handleToggleTask(t.id) }}
									color="warning"
									icon={<CheckCircleOutlineIcon />}
									checkedIcon={<CheckCircleOutlineIcon />}
								/>}
							label={t.todo}

						/>
					</ListItem>)}
			</List>
		</section>
	)
}