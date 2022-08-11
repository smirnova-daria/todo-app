import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoToggled, selectTodos } from '../../redux/todosSlice';

export const AllTasks: React.FC = () => {
	const tasks = useSelector(selectTodos)
	const dispatch = useDispatch()

	const handleToggleTask = (id: string) => {
		dispatch(todoToggled(id))
	}

	return (
		<div>
			AllTasks
			<div>
				{tasks?.map(t =>
					<div key={t.id} onClick={() => { handleToggleTask(t.id) }}>
						{t.todo} - {t.completed ? 'done' : 'to do'}
					</div>)}
			</div>
		</div>
	)
}