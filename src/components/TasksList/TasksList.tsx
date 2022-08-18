import { List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllTodos, selectFilter, selectCompletedTodos, selectActiveTodos, getTodos, toggleTodo } from '../../redux/todosSlice';

import s from './TasksList.module.css'
import { TaskItem } from './TaskItem';

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
	}, [dispatch])

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
				{tasks.map(t => <TaskItem task={t} handleToggleTask={handleToggleTask} />)}
			</List>
		</section>
	)
}