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

export default function FolderList() {
	return (
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
	);
}