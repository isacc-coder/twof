import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuList from '@material-ui/core/MenuList';
import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '300px',
    minWidth: '300px',
    height: '100vh',
    backgroundColor: '#91E8EB',
    margin: 0,
    flex: 1,
    position: 'sticky',
  },
  positionSticky: {},
}));
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: '#f44336',
//     },
//   },
// });

export default function Sidebar({ children }) {
  const classes = useStyles();

  return (
    <Box display="flex" width="100%">
      <Paper className={classes.root} style={{ position: 'sticky' }}>
        <MenuList>
          <Link to="/Home" className="Link">
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>

              <Typography variant="inherit">Dashbord</Typography>
            </MenuItem>
          </Link>
          <Link to="/Companies" className="Link">
            <MenuItem>
              <ListItemIcon>
                <LineStyleIcon fontSize="small" />
              </ListItemIcon>

              <Typography variant="inherit">Company</Typography>
            </MenuItem>
          </Link>
        
       <Link to="/" className="Link">
            <MenuItem>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
               Logout
              </Typography>
            </MenuItem>
          </Link>

          <Link to="/Clerk" className="Link">
            <MenuItem>
              <ListItemIcon>
                <AddBoxIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Add
              </Typography>
            </MenuItem>
          </Link>
        </MenuList>
      </Paper>
      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
}
