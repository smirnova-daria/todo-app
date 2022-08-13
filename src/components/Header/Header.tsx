import React from 'react';
import s from './Header.module.css'

export const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<h1 className={s.title}>todos</h1>
		</header>
	)
}