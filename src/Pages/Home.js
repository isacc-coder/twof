import React from 'react';
import Box from '../Components/Box';
import Chart from '../Components/Chart';
import { userData } from '../Dammydata';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box />
      <Chart data={userData} title="User Analytics " grid dataKey="ActiveUser" />
      This is home
    </div>
  );
}
