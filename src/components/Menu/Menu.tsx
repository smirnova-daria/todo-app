import React from 'react';
import { useDispatch } from 'react-redux';
import { completedTodosCleared, filterChanged, FilterType } from '../../redux/todosSlice';

export const Menu: React.FC = () => {
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(completedTodosCleared())
	}

	const handleFilter = (filter: FilterType) => {
		dispatch(filterChanged(filter))
	}

	return (
		<nav>
			<ul>
				<li><button
					onClick={() => { handleFilter('all') }}>
					All tasks</button></li>
				<li><button
					onClick={() => { handleFilter('active') }}>
					Active tasks</button></li>
				<li><button
					onClick={() => { handleFilter('completed') }}>
					Completed tasks</button></li>
				<li><button
					onClick={handleClear}>
					Clear Completed</button></li>
			</ul>
		</nav>
	)
}