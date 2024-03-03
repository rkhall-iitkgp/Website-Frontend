import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import styles from './css/Experience.module.css'

export default function ExperienceList({
    experiences,
    saveExperience,
    onDeleteExperience,
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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
		{Object.values(experiences).map((experience, index) => 
			<React.Fragment key={index}>
				<ExperienceItem 
                    experience={experience}
                    onDelete={onDeleteExperience}
                    isEditing={isEditing}
                    updateChanges={updateChanges}
                />
				<Divider />
			</React.Fragment>
		)}
	</List>
  );
}

function ExperienceItem({ experience, onDelete, isEditing, updateChanges }) {
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
        {/* <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button> */}
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
    // <label>
    //   <input
    //     type="checkbox"
    //     checked={todo.done}
    //     onChange={e => {
    //       onChange({
    //         ...todo,
    //         done: e.target.checked
    //       });
    //     }}
    //   />
    //   {todoContent}
    //   <button onClick={() => onDelete(todo.id)}>
    //     Delete
    //   </button>
    // </label>
  );
}
