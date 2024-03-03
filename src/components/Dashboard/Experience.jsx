import * as React from 'react';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExperienceList from './ExperienceList';

export default function FolderList() {
	const [experiences, setExperiences] = React.useState([]);
	const [editMode, setEditMode] = React.useState('')
	const [saveMode, setSaveMode] = React.useState('')
	// test code
	const handleAddExperience = () => {
		setEditMode('exp-add')
		;
	}
	const handleEditExperience = () => {
		setEditMode('exp-edit');
	}
	const saveExperience = (changes) => {
		setExperiences(changes)
		setSaveMode('')
		setEditMode('')
	}
	const addNewExperience = () => {
		setEditMode('')
		setExperiences([...experiences, {
			_id: experiences.length++,
			name: 'Soc/Cell Name',
			role: 'Role',
			image: getRandImage()
		}])
	}

	const getRandImage = () => [<ImageIcon />, <WorkIcon />, <BeachAccessIcon />][Math.floor(Math.random()*3)];
	
	React.useEffect(() => {
		// const data = 'fetch data somehow ig'
		const data = [{
			_id: 1,
			name: 'Soc/Cell Name',
			role: 'Role',
			image: <ImageIcon />
		},
		{
			_id: 2,
			name: 'Soc/Cell Name',
			role: 'Role',
			image: <WorkIcon />
		},
		{
			_id: 3,
			name: 'Soc/Cell Name',
			role: 'Role',
			image: <BeachAccessIcon />
		}]
		setExperiences(data);
	}, [])
	return (
	<Stack direction='column' sx={{width: '80%'}} justifyContent="flex-start" alignItems="center">
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Grid item xs={11}>
				<h3>Experience :</h3>
			</Grid>
			<Grid item xs={1}>
				<Stack direction='row' spacing={2}>
					<IconButton onClick={() => {editMode === 'exp-add'? addNewExperience() : handleAddExperience()}} aria-label="add" sx={{ 
						backgroundColor: '#FFD050',
						'&:hover': {
							backgroundColor: "#FFDD50"
						}
						}}>
						{editMode === 'exp-add' ? <SaveOutlinedIcon /> : <AddIcon />}
					</IconButton>
					<IconButton onClick={() => { editMode === 'exp-edit'? setSaveMode('save-edit') : handleEditExperience()}} aria-label="edit" sx={{ 
						backgroundColor: '#FFD050',
						'&:hover': {
							backgroundColor: "#FFDA50"
						}
						}}>
						{ editMode === 'exp-edit' ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
					</IconButton>
				</Stack>
			</Grid>
		</Grid>
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<ExperienceList 
				experiences={experiences}
				saveExperience={saveExperience}
				onDeleteExperience={''}
				isEditing={editMode === 'exp-edit'}
				saveMode={saveMode}
			/>
			{/* {Object.values(experiences).map((ele, index) => 
				<React.Fragment key={index}>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar sx={{ minWidth: 40 }}>
							<Avatar sx={{ width: 30, height: 30 }}>
								{ele.image}
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={ele.name} secondary={ele.role} />
					</ListItem>
					<Divider />
				</React.Fragment>
			)} */}
		</List>
	</Stack>
	);
}