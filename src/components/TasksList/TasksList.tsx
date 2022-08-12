import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllTodos, selectFilter, selectCompletedTodos, selectActiveTodos, getTodos, toggleTodo } from '../../redux/todosSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
		<div>
			<h3>{filter} tasks</h3>
			<div>
				{tasks.map(t =>
					<div key={t.id} >
						<FormControlLabel
							control={
								<Checkbox
									checked={t.completed} onClick={() => { handleToggleTask(t.id) }}
									color="success"
									icon={<CheckCircleOutlineIcon />}
									checkedIcon={<CheckCircleOutlineIcon />}
								/>}
							label={t.todo} />
					</div>)}
			</div>
		</div>
	)
}