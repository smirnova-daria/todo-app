import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoToggled, selectAllTodos, selectFilter, selectCompletedTodos, selectActiveTodos, todosFetched } from '../../redux/todosSlice';

export const TasksList: React.FC = () => {
	const allTasks = useSelector(selectAllTodos)
	const completedTasks = useSelector(selectCompletedTodos)
	const activeTasks = useSelector(selectActiveTodos)
	const [tasks, setTasks] = useState(allTasks)
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch()

	const handleToggleTask = (id: string) => {
		dispatch(todoToggled(id))
	}
	useEffect(() => {
		dispatch(todosFetched())
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
					<div key={t.id} onClick={() => { handleToggleTask(t.id) }}>
						{t.todo} - {t.completed ? 'done' : 'to do'}
					</div>)}
			</div>
		</div>
	)
}