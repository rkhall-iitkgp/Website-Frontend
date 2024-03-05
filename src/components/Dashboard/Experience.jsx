import * as React from 'react';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExperienceList from './ExperienceList';
import Typography from '@mui/material/Typography'

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
	<container>
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Stack direction='row' justifyContent="space-between" alignItems="center" sx={{ width: '100%'}}>
				<Typography variant='h5' sx={{ position: 'relative', fontWeight: 'bold', color: 'black'}}>Experience: </Typography>
				<Stack direction='row' justifyContent="space-between" alignItems="center" sx={{ width: 90}}>
					<IconButton onClick={() => {editMode === 'exp-add'? addNewExperience() : handleAddExperience()}} aria-label="add" sx={{ 
						backgroundColor: '#FFD050',
						'&:hover': {
							backgroundColor: "#FFDD50"
						}
						}}>
						{editMode === 'exp-add' ? <SaveOutlinedIcon /> : <AddIcon />}
					</IconButton>
					<IconButton onClick={() => { editMode === 'exp-edit'? setSaveMode('save-edit') : setEditMode('exp-edit')}} aria-label="edit" sx={{ 
						backgroundColor: '#FFD050',
						'&:hover': {
							backgroundColor: "#FFDA50"
						}
						}}>
						{ editMode === 'exp-edit' ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
					</IconButton>
				</Stack>
			</Stack>
			<ExperienceList 
				experiences={experiences}
				saveExperience={saveExperience}
				onDeleteExperience={''}
				isEditing={editMode === 'exp-edit'}
				saveMode={saveMode}
			/>
		</Box>
	</container>
	);
}