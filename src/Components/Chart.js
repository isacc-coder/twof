import React from 'react'
import { LineChart, Line,AreaChart,Area, BarChart,  
    Bar,YAxis, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';   
import MenuItem from '@material-ui/core/MenuItem';  
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';  
import Box from '@material-ui/core/Box';
    

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        display:'flex',
        margin: '5px',
        justifyContent:'space-between',
      
      },
      boot:{
  
        backgroundColor:'#2b97f1',
        display:'flex',
        justifyContent:'space-between',
        color:"#fff" ,
        margin:1,
      
       },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft:80,
        color:"#fff" ,

        
    
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
      },
      control: {
        padding: theme.spacing(4),
      },
      
    }));

    const theme = createTheme({
      palette: {
        primary: {
          main: yellow[500],
        },
        secondary: {
          main: '#f44336',
        },
      },
    });

export default function Chart({title, data, dataKey, grid, }) {
    const classes = useStyles();
    return (
        <>
        
        <div  className={classes.root}>
       
         
<Grid item>
<Box className={classes.boot}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        p={0}
        style={{ width: '28rem', height: '4rem' }}
        >
   <Typography  variant="h6" >
     Coast Graph    
     <Typography>Last seven Days Coast Graph</Typography>    
   </Typography>
  
   <FormControl className={classes.formControl}>
       <InputLabel id="demo-controlled-open-select-label">Last Days</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select">
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
     </FormControl>
      </Box>
 
<Paper style={{height:200, width:400,}} className={classes.control}>
<ResponsiveContainer> 
 <BarChart
      width={400}
      height={235}
      data={data}
      margin={{
        
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
     
      <Bar dataKey={dataKey}  fill="blue" />
    </BarChart>
 </ResponsiveContainer>

</Paper>
 </Grid>


           
      

      <Grid item>
      <Box className={classes.boot}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        p={0}
        style={{ width: '26rem', height: '4rem' }}
        >
   <Typography  variant="h6" >
     Profit Graph    
      <Typography>Profit Growth This Month</Typography> 
   </Typography>
  
   <FormControl className={classes.formControl}>
       <InputLabel id="demo-controlled-open-select-label">Last Month</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select">
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
     </FormControl>
      </Box>
<Paper style={{height:290, width:400}}>

<ResponsiveContainer> 
<LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        // top: 10,
        // right: 30,
        // left: 0,
        // bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
     
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        fill="blue"
      />
      
    </LineChart>
  </ResponsiveContainer>
</Paper>
 </Grid>
      

       
               </div>
          <div className={classes.root}>
      

 
      <Grid item>
      <Box className={classes.boot}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        p={0}
        style={{ width: '28rem', height: '4rem' }}
        >
   <Typography  variant="h6" >
     Profit Graph    
     <Typography>Profit Growth This Year</Typography>   
   </Typography>
  
   <FormControl className={classes.formControl}>
       <InputLabel id="demo-controlled-open-select-label">Last Year</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select">
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
     </FormControl>
      </Box>
<Paper style={{height:300, width:400}}>

<ResponsiveContainer>  
<LineChart
        width={400}
        height={300}
        data={data}
        syncId="anyId"
        margin={{
          // top: 10,
          // right: 30,
          // left: 0,
          // bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" fill="blue" />
       
      </LineChart>
    </ResponsiveContainer>
</Paper>
 </Grid>
       
      
    
      

  <Grid item>
  
  <Box className={classes.boot}
        boxShadow={3}
        bgcolor="background.paper"
        m={5}
        p={0}
        style={{ width: '26rem', height: '4rem' }}
        >
   <Typography  variant="h6" >
     CompanyGrowthGraph   
     <Typography>Newly regsted companies</Typography> 
      
   </Typography>
  
   <FormControl className={classes.formControl}>
       <InputLabel id="demo-controlled-open-select-label">Last Month</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select">
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
     </FormControl>
      </Box>

<Paper style={{height:300, width:400}}>
<ResponsiveContainer>   
<AreaChart
       width={350}
       height={300}
       data={data}
       syncId="anyId"
       margin={{
         top: 50,
         right: 30,
         left: 0,
         bottom: 0
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
       <Area type="monotone" dataKey={dataKey} stroke="blue" fill="blue" />
     </AreaChart>
     </ResponsiveContainer>
</Paper>
</Grid>
    
        </div> 
        </>
    )
}
