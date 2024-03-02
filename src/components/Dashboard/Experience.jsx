import * as React from 'react';
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
import Button from '@mui/material/Button'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function FolderList() {
	return (
	<>
		<div>
			<h4>Experience :</h4>
			<IconButton aria-label="add" sx={{ 
				backgroundColor: '#FFD050',
				'&:hover': {
					backgroundColor: "#FFDD50"
				}
				}}>
				<AddIcon />
			</IconButton>
			<IconButton aria-label="edit" sx={{ 
				backgroundColor: '#FFD050',
				'&:hover': {
					backgroundColor: "#FFDD50"
				}
				}}>
				<EditOutlinedIcon />
			</IconButton>
		</div>
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<ListItem alignItems='flex-start'>
				<ListItemAvatar sx={{ minWidth: 40 }}>
					<Avatar sx={{ width: 30, height: 30 }}>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Soc/Cell Name" secondary="Role" />
			</ListItem>
			<Divider />
			<ListItem alignItems='flex-start'>
				<ListItemAvatar sx={{ minWidth: 40 }}>
					<Avatar sx={{ width: 30, height: 30 }}>
						<WorkIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Soc/Cell Name" secondary="Role"/>
			</ListItem>
			<Divider />
			<ListItem alignItems='flex-start'>
				<ListItemAvatar sx={{ minWidth: 40 }}>
					<Avatar sx={{ width: 30, height: 30 }}>
						<BeachAccessIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Soc/Cell Name" secondary="Role" />
			</ListItem>
			<Divider />
		</List>
	</>
	);
}