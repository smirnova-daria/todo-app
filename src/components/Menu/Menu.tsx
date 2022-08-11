import React from 'react';
import { useDispatch } from 'react-redux';
import { completedTodosCleared } from '../../redux/todosSlice';

export const Menu: React.FC = () => {
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(completedTodosCleared())
	}
	return (
		<nav>
			<ul>
				<li><button>All tasks</button></li>
				<li><button>Active tasks</button></li>
				<li><button>Completed tasks</button></li>
				<li><button onClick={handleClear}>Clear Completed</button></li>
			</ul>
		</nav>
	)
}