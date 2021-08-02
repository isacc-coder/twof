import React from 'react'
import { Link } from 'react-router-dom'
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



const useStyles = makeStyles((theme) => ({
 
  root: {
    width: 230,
    height:530,
    backgroundColor:'#91E8EB',
    margin:0,
    flex: 1,
    position: 'sticky',
  },
  positionSticky:{

  }
 
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

export default function Sidebar() {
    const classes = useStyles();
    return (
        
      
           
<Paper className={classes.root} style={{position:"sticky"}}>
      <MenuList>
         <Link to="/" className="Link" >
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
            <LineStyleIcon  fontSize="small" />
          </ListItemIcon>
          
          <Typography variant="inherit">Company</Typography>
        </MenuItem>
        </Link>
        <Link to="/Login" className="Link">
        <MenuItem>
           
          <ListItemIcon>
            <VpnKeyIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
                LOGIN
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


 
     
    )
}
