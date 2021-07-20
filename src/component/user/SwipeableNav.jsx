import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { AssignmentTurnedIn, Dashboard, ExitToApp, Home, Mail, Note, Notifications, Person, Settings } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

export default function SwipeableNav(props) {
	return (
		<div>
			<>
				<SwipeableDrawer
					open={props.open}
					onClose={()=>props.toggleDrawer()}
					onOpen={()=>props.toggleDrawer()}
				>
					<List>
						<NavLink activeClassName='' className='' to='/' exact>
							<ListItem>
								<ListItemIcon>
									<Home/>
								</ListItemIcon>
								<ListItemText>
									Home
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className='' to='/app/dashboard'>
							<ListItem>
								<ListItemIcon>
									<Dashboard />
								</ListItemIcon>
								<ListItemText>
									Dashboard
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className=''  to='/app/profile'>
							<ListItem>
								<ListItemIcon>
									<Person />
								</ListItemIcon>
								<ListItemText>
									Profile
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className='' to='/app/tests'>
							<ListItem>
								<ListItemIcon>
									<Note />
								</ListItemIcon>
								<ListItemText>
									Tests
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className='' to='/app/completed-tests'>
							<ListItem>
								<ListItemIcon>
									<AssignmentTurnedIn />
								</ListItemIcon>
								<ListItemText>
									Completed Tests
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className='' to='/app/settings'>
							<ListItem>
								<ListItemIcon>
									<Settings />
								</ListItemIcon>
								<ListItemText>
									Settings
								</ListItemText>
							</ListItem>
						</NavLink>
						<NavLink activeClassName='' className='' to='/app/logout'>
							<ListItem>
								<ListItemIcon>
									<ExitToApp />
								</ListItemIcon>
								<ListItemText>
									Logout
								</ListItemText>
							</ListItem>
						</NavLink>
                </List>
				</SwipeableDrawer>
			</>
		</div>
	);
}
