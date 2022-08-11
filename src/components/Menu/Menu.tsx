import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
	return (
		<nav>
			<ul>
				<li><Link to='/all'>All tasks</Link></li>
				<li><Link to='/active'>Active tasks</Link></li>
				<li><Link to='/completed'>Completed tasks</Link></li>
			</ul>
		</nav>
	)
}