import React from 'react'
 import { DataGrid,GridToolbar,  GridToolbarDensitySelector, GridToolbarFilterButton } from '@material-ui/data-grid';
import { userRows } from '../Dammydata';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles({
    root: {
      minWidth: 15,
      margin:30,
      
      color:"primary"
    },
    bullet: {
      top:205,
      display: 'flex',
      margin: '10px',
      transform: 'scale(0.8)',
      boxshadow:5,
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: '#2b97f1',
      color: '#fff',

      
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    input:{
      display:'hidden',
    },
    user:{
      flex:4,
     
    },
    userListbutt:{
      border:'none',
      backgroundColor: blue,
      coursor:'pointer',
      bgcolor:"background.paper",
      margin:'1px'
  
     

    }
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: '#2979ff',
      },

    },
   
  });
export default function Companies() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newopen, setnewOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Open2 = () => {
    setnewOpen(true);
  };

  const Close2 = () => {
    setnewOpen(false);
  };
 
    const columns = [
    
      { field: 'name', headerName: 'Name', width: 180 },
        {
         field: 'Balance',
          headerName: 'Balance',
          type: 'number',
          width: 140,
        },
        {
         field: 'payementMethod',
         headerName: 'payementMethod',
          width: 180,
          type: 'date',
        },
        {
            field: 'status',
            headerName: 'status',
            width: 120,
            type: 'date',
        },
          {
            field: 'change',
            headerName: 'change',
            width: 190,
            renderCell: (params)=>{
                return (
                    <>
                
                    <Button color="primary" size="small"  variant="contained" onClick={Open2} className={classes.userListbutt} >ChangeStatus</Button>
                     <Button color="primary"  size="small"  variant="contained"   className={classes.userListbutt}>Pay</Button>
                    
                   
                    </>
                )
            }
          
          },
      ];
      
    return (
        <> 

     
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add Company"}</DialogTitle>

       
        
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
    
            <FormLabel align="center">Upload an image by clicking here</FormLabel>

        <DialogContent>
          <DialogContentText>
          <TextField
            variant="outlined"
            margin="normal"
            required
          
            id="name"
            label="First Name"
            name="First"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Description"
            name="Describe"
            autoComplete="Description"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            
            id="city"
            label="City"
            name="City"
            autoComplete="City"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
       
            id="name"
            label="Sub City"
            name="Sub City"
            autoComplete="Sub City"
            autoFocus
          />
          
          
          
           
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary" variant="contained">
            Register
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus variant="disable">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>



      <Dialog
        fullScreen={fullScreen}
        open={newopen}
        onClose={Close2}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Change Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="Active">Active</InputLabel>
              <Select
                autoFocus
                fullWidth
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                  
                }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="xs">Deactive</MenuItem>
           
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
            
        <DialogActions>
          <Button autoFocus onClick={Close2} color="primary" variant="contained">
            Update
          </Button>
          <Button onClick={Close2} color="primary" autoFocus variant="disable">
            Cancel
          </Button>
        </DialogActions>
      </Dialog> 



<div className={classes.user}>
     

         
           
             <Card className={classes.root}>
      <CardContent>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={userRows} columns={columns}
       pageSize={2}
        
         components={{
             
           Toolbar:GridToolbarFilterButton,
                
              }}
      />
            </div>
            </CardContent>
    
    </Card>
 
        
           <ListItemSecondaryAction > 
              <IconButton  boxShadow={3} className={classes.bullet} color="primary" variant="contained" fontSize="large">
            <AddIcon  onClick={handleClickOpen}/>
              </IconButton>  
      </ListItemSecondaryAction> 
        
        </div> 
        </>
    )
}
