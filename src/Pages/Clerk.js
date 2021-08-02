import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 15,
    margin: 30,
    color: "primary",
  },
  bullet: {
    top: 200,
    display: "inline-block",
    margin: "2 5px",
    transform: "scale(0.8)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#2b97f1",
    color: "#fff",
    "&:hover": {
      background: "#1B83D8",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pro: {
    flex: 4,
  },
}));
export default function Clerk() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newopen, setnewOpen] = React.useState(false);

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
  return (
    <div className={classes.pro}>
      <Card className={classes.root}>
        <CardContent>
          <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button>
              <ListItemIcon></ListItemIcon>

              <Link to="/Sender" class="Link">
                <ListItemText primary="Dear customer, You have transefer <Amount Number> to <Phone Number>" />{" "}
              </Link>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <EditIcon color="primary" onClick={handleClickOpen} />
                </IconButton>
                <IconButton edge="end">
                  <DeleteIcon color="secondary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button>
              <Link to="/Sender" class="Link">
                <ListItemText
                  inset
                  primary="Dear customer, You have transefer <xxxxxxxxxxxx> to <Phone Number>"
                />
              </Link>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <EditIcon color="primary" onClick={handleClickOpen} />
                </IconButton>
                <IconButton edge="end">
                  <DeleteIcon color="secondary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button>
              <Link to="/Sender" class="Link">
                {" "}
                <ListItemText
                  inset
                  primary="Dear customer, You have transefer <Amount Number> to <Phone Number>"
                />
              </Link>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <EditIcon color="primary" onClick={handleClickOpen} />
                </IconButton>
                <IconButton edge="end">
                  <DeleteIcon color="secondary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Compose Message Temples</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Insert Message here"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                ADD
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={newopen}
            onClose={Close2}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Edit Message Temples</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Insert Message here"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={Close2} color="primary">
                Cancel
              </Button>
              <Button onClick={Close2} color="primary">
                ADD
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>

      <ListItemSecondaryAction edge="bottom">
        <IconButton className={classes.bullet} color="primary" fontSize="large">
          <AddIcon onClick={Open2} />
        </IconButton>
      </ListItemSecondaryAction>
    </div>
  );
}
