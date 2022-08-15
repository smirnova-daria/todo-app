import { Checkbox, FormControlLabel, ListItem } from '@mui/material';
import React from 'react';
import { TodoType } from '../../redux/todosSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type PropsType = {
	task: TodoType
	handleToggleTask: (id: string) => void
}

export const TaskItem: React.FC<PropsType> = (props) => {
	return (
		<ListItem key={props.task.id} sx={{ padding: '0 15px' }} >
			<FormControlLabel
				control={
					<Checkbox
						checked={props.task.completed} onClick={() => { props.handleToggleTask(props.task.id) }}
						color="warning"
						icon={<CheckCircleOutlineIcon />}
						checkedIcon={<CheckCircleOutlineIcon />}
					/>}
				label={props.task.todo}
			/>
		</ListItem>)
}