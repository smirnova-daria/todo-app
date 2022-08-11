import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todosSlice';

export const AllTasks: React.FC = () => {

	const tasks = useSelector(selectTodos)

	return (
		<div>
			AllTasks
			<div>
				{tasks?.map(t =>
					<div>
						{t.todo} - {t.done ? 'done' : 'to do'}
					</div>)}
			</div>
		</div>
	)
}