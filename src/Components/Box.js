import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PeopleIcon from "@material-ui/icons/People";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Container} from "@material-ui/core";
import TextsmsIcon from "@material-ui/icons/Textsms";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  cards: {
    padding: "1rem",
  },
  one: {
    fontSize: 50,
    padding: "10px",
    marginLeft: "50px",
    backgroundColor: "#ffc107",
    borderRadius: "50%",
    position: "center",
    justifyContent: "center",
    color: "#fff",
    top: "0px",
  },
}));
export default function Box() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.cards}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total SMS
              </Typography>
              <Typography variant="h6">
                324SMS <TextsmsIcon className={classes.one} />
              </Typography>
              <Typography color="textSecondary">
                <Link color="primary" href="#">
                  16%
                  <ArrowUpwardIcon />
                  since last month
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.cards}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total Cost
              </Typography>
              <Typography variant="h6">
                324 Birr
                <LocalAtmIcon className={classes.one} />
              </Typography>
              <Typography color="textSecondary">
                <Link color="primary" href="#">
                  16% <ArrowUpwardIcon />
                  since last month
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.cards}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                TotalUser
              </Typography>
              <Typography variant="h6">
                324Users
                <PeopleIcon className={classes.one} />
              </Typography>
              <Typography color="textSecondary">
                <Link color="primary" href="#">
                  16% <ArrowUpwardIcon />
                  since last month
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.cards}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Success Rate
              </Typography>
              <Typography variant="h6">
                324Rate <TrendingUpIcon className={classes.one} />
              </Typography>
              <Typography color="textSecondary">
                <Link color="primary" href="#">
                  16% <ArrowUpwardIcon />
                  since last month
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
