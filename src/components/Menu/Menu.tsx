import { Button, Divider, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCompletedTodos, filterChanged, FilterType, selectFilter } from '../../redux/todosSlice';

export const Menu: React.FC = () => {
	const dispatch = useDispatch<any>()
	const selectedFilter = useSelector(selectFilter)

	const handleClear = () => {
		dispatch(clearCompletedTodos())
	}

	const handleFilter = (filter: FilterType) => {
		dispatch(filterChanged(filter))
	}

	type FilterButtonType = {
		id: number
		text: string
		filter?: FilterType
	}

	const filterButtons: Array<FilterButtonType> = [
		{ id: 1, text: 'All', filter: 'all' },
		{ id: 2, text: 'Active', filter: 'active' },
		{ id: 3, text: 'Completed', filter: 'completed' },
		{ id: 4, text: 'Clear Completed' },
	]

	return (
		<div>
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				justifyContent="space-between"
				spacing={2}
				mt={2}
			>
				{filterButtons.map(btn => {
					if (btn.filter) {
						return <Button
							key={btn.id}
							variant={selectedFilter === btn.filter ? "outlined" : "text"}
							onClick={() => { handleFilter(btn.filter as FilterType) }}
							size='small'
							color={selectedFilter === btn.filter ? "warning" : "inherit"}
						>
							{btn.text}
						</Button>
					}
					if (btn.id === 4) {
						return <Button
							key={btn.id}
							variant='outlined'
							onClick={handleClear}
							size='small'
							color='error'
						>
							{btn.text}
						</Button>
					}
				}
				)}
			</Stack>

		</div>
	)
}