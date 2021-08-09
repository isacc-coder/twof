import React from 'react';
import { Link } from 'react-router-dom';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Dropzone from 'react-dropzone';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '48rem',
    height: '28rem',
    // backgroundColor:'#00bcd4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    flex: 4,
    paddingTop: '50px',
    // padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  one: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    padding: 20,
    boxSizing: 'border-box',
  },
  margin: {
    padding: theme.spacing(3),
  },
  ico: {
    // left:'120%',
    marginTop: '20px',
  },
  userContainer: {
    // backgroundColor:'#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  userAddButton: {
    right: 500,
  },
  pap: {
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    width: '48rem',
    height: '10rem',
    boxSizing: 'border-box',
    padding: '10px',
    marginTop: '10px',
    outline: 'none',
  },
  icon: {
    fontSize: '42px',
    color: '#2b97f1',
  },
}));
export default function Sender() {
  const classes = useStyles();

  // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  return (
    <div className={classes.user}>
      <div className={classes.userContainer}>
        <h1 className="userTitle">Send SMS Group</h1>
        <Link to="/Signup" class="Link">
          <Button variant="contained" color="secondary" className={classes.userAddButton}>
            Create
          </Button>
        </Link>
      </div>

      {/* <Box
        className={classes.one}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        p={0}
        style={{width: "48rem", height: "10rem"}}
      > */}
      {/* <div {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          <p style={{alignItems: "center"}}>
            Drag and drop an excel files here, or click
          </p>
        </div>
        <aside>
          <ul>{files}</ul>
          <CloudDownloadIcon color="primary" fontSize="large" />
        </aside> */}

      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <Paper className={classes.pap} {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop an excel files here, or click</p>
            <CloudDownloadIcon className={classes.icon} />
          </Paper>
        )}
      </Dropzone>
      {/* </Box> */}

      <Box className={classes.root} boxShadow={3} m={5} p={0}>
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="PhoneNumber Header"
            name="PhoneNumber Header"
            autoComplete="PhoneNumber Header"
            autoFocus
          />
          <TextField
            style={{ marginTop: '20px', marginBottom: '50px' }}
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="Group Name"
            label="Group Name"
            name="Group Name"
            autoComplete="Group Name"
            autoFocus
          />
          <Box mb={3}>
            <FormLabel component="legend">Choose Unicode or GSM</FormLabel>
            <FormControlLabel
              value="Unicode"
              control={<Radio color="primary" />}
              label="Unicode"
              labelPlacement="Unicode"
            />
            <FormControlLabel
              value="GSM"
              control={<Radio color="primary" />}
              label="GSM"
              labelPlacement="GSM"
            />
          </Box>
          <InputLabel htmlFor="age-native-simple">Sender ID</InputLabel>
          <Select fullWidth>
            <option aria-label="None" value="Sender id" />
            <option value={10}>one</option>
            <option value={20}>Two</option>
            <option value={30}>Thiry</option>
          </Select>

          <Button variant="contained" color="primary" className={classes.ico}>
            Send
          </Button>
          <Button variant="disable" color="disable" className={classes.ico}>
            Cancel
          </Button>
        </CardContent>
      </Box>
    </div>
  );
}
