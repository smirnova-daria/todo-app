import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCompletedTodos } from '../../redux/todosSlice';

export const Menu: React.FC = () => {
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(removeCompletedTodos())
	}
	return (
		<nav>
			<ul>
				<li><Link to='/all'>All tasks</Link></li>
				<li><Link to='/active'>Active tasks</Link></li>
				<li><Link to='/completed'>Completed tasks</Link></li>
				<li><button onClick={handleClear}>Clear Completed</button></li>
			</ul>
		</nav>
	)
}