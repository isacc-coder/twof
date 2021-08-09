import React from 'react';
import {
  DataGrid,
  GridToolbar,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from '@material-ui/data-grid';
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import * as api from '../Setup';
import { getStatus } from '../Setup';

import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 15,
    margin: 30,

    color: 'primary',
  },
  bullet: {
    top: 235,
    display: 'flex',
    margin: '20px',
    transform: 'scale(0.8)',
    boxShadow: 5,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#2b97f1',
    color: '#fff',
    '&:hover': {
      background: '#1B83D8',
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    display: 'hidden',
  },
  user: {
    flex: 4,
  },
  userListbutt: {
    border: 'none',
    backgroundColor: blue,
    coursor: 'pointer',
    bgcolor: 'background.paper',
    margin: '1px',
  },
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
  const [active, setActive] = useState('');
  const [deactive, setDeactive] = useState('');
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [newopen, setnewOpen] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  // const onSubmit = (data) => {
  //   history.push("/companies")
  // }
  // const mutation = useMutation(() => axios.get('https://138.68.163.236/api/v1/companies',
  // ));
  //const { data, status, refetch, isFetching } = useQuery('companies', ()=>api.getCompanies());
  const { data, status, refetch, isFetching } = useQuery(['companies'], () => api.getCompanies(50));
  useEffect(() => {
    if (data) {
      console.log(data.data.data);
      const companiesData = data.data.data.map((d) => ({
        id: d.id,
        name: d.company_name,
        Balance: d.balance,
        payementMethod: d.payment_type,
        status: d.status,
        Change: '',
      }));
      setCompanies(companiesData);
    }
  }, [data]);
  // const mutation = useMutation((active, deactive) => getStatus({ active, deactive }));
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Close2 = () => {
    setnewOpen(false);
  };
  //  const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('hello')
  //   // mutation.mutate(active, deactive);
  // };
  const handleChange = (e) => {
    setActive(e.target.value);
    //setDeactive(e.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    Close2();
  };

  const Open2 = () => {
    setnewOpen(true);
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
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Button
              disableElevation
              color="primary"
              size="small"
              variant="contained"
              onClick={Open2}
              className={classes.userListbutt}
            >
              Status
            </Button>
            <Button
              disableElevation
              color="primary"
              size="small"
              variant="contained"
              className={classes.userListbutt}
            >
              Pay
            </Button>
          </>
        );
      },
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
        <DialogTitle id="responsive-dialog-title">{'Add Company'}</DialogTitle>

        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>

        <FormLabel align="center">Upload an image by clicking here</FormLabel>

        <DialogContent>
          <DialogContentText>
            <TextField
              {...register('firstName', { required: true, maxLength: 20 })}
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
              {...register('Descirption')}
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
              {...register('city')}
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
              {...register('subcity')}
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
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
            variant="contained"
            onSubmit={handleSubmit(onSubmit)}
          >
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
        <DialogTitle id="responsive-dialog-title">{'Change Status'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="Active">Active</InputLabel>
              <Select
                autoFocus
                fullWidth
                onChange={handleChange}
                style={{
                  minWidth: 200,
                }}
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
          <Button
            autoFocus
            // onClick={handleSubmit}

            color="primary"
            variant="contained"
            // disabled={mutation.isLoading}
          >
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
              <DataGrid
                rows={companies}
                columns={columns}
                pageSize={2}
                components={{
                  Toolbar: GridToolbarFilterButton,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <ListItemSecondaryAction>
          <IconButton
            boxShadow={3}
            className={classes.bullet}
            color="primary"
            variant="contained"
            fontSize="large"
          >
            <AddIcon onClick={handleClickOpen} />
          </IconButton>
        </ListItemSecondaryAction>
      </div>
    </>
  );
}
