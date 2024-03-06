import * as React from 'react';
import Stack from '@mui/material/Stack'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import styles from './css/Experience.module.css'

export default function ExperienceList({
	experiences,
	saveExperience,
	deleteExperience,
	isEditing,
	saveMode
}) {
	const [changes, setChanges] = React.useState(experiences);

	const updateChanges = (updatedExperience) => {
		const updatedChanges = changes.map(ele => ele._id === updatedExperience._id ? updatedExperience : ele);
		setChanges(updatedChanges);
	}

	React.useEffect(() => {
		if (saveMode === 'save-edit') {
			saveExperience(changes);
		}
	})

	React.useEffect(() => {
		setChanges(experiences)
	}, [experiences])

	return (
	<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
		{Object.values(experiences).map((experience, index) => 
			<React.Fragment key={index}>
				<Stack direction='row' justifyContent="space-between" alignItems="center">
					<ExperienceItem 
						experience={experience}
						isEditing={isEditing}
						updateChanges={updateChanges}
					/>
					{ isEditing ?
					<IconButton onClick={() => deleteExperience(experience._id)} aria-label="detete">
						<DeleteOutlinedIcon />
					</IconButton> : null}
				</Stack>
				<Divider sx={{ bgcolor: "black" }}/>
			</React.Fragment>
		)}
	</List>
  );
}

function ExperienceItem({ experience, isEditing, updateChanges }) {
	const [exp, dispatch] = React.useReducer(reducer, { ...experience });

	function reducer (state, action) {
		switch (action.type) {
			case 'primary': {
				return {
					...state,
					'name': action.newName,
				}
			}
			case 'secondary': {
				return {
					...state,
					'role': action.newRole
				}
			}
			default: {
				return state
			}
		}
	}
	let content;
	if (isEditing) {
	content = (
	  <>
		<ListItemText
			primary=<input className={styles['primary']} value={exp.name} onChange={(e) => { dispatch({ type: 'primary', newName: e.target.value}); updateChanges({ ...exp, name: e.target.value }) }} />
			secondary=<input className={styles['secondary']} value={exp.role} onChange={(e) => { dispatch({ type: 'secondary', newRole: e.target.value}); updateChanges({ ...exp, role: e.target.value }) }} />
		/>
	  </>
	);
	} else {
		content = (
			<ListItemText primary={experience.name} secondary={experience.role} />
	);
  }
  return (
	<ListItem alignItems='flex-start'>
		<ListItemAvatar sx={{ minWidth: 40 }}>
			<Avatar sx={{ width: 30, height: 30 }}>
				{experience.image}
			</Avatar>
		</ListItemAvatar>
		{content}
	</ListItem>
  );
}
