import React from 'react'
import { useGlobalContext } from './context'
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import Clerk from './Pages/Clerk'
import Companies from './Pages/Companies'
import Login from './Pages/Login'
import Sender from './Pages/Sender'
import Signup from './Pages/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return(
     <Router>
      <Topbar /> 
    <div className="container">
    <Sidebar/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/Companies">
      <Companies/>
      </Route>
      <Route path="/Sender">
      <Sender/>
      </Route>
      <Route path="/Login">
      <Login/>
      </Route>
      <Route path="/Clerk">
      <Clerk/>
      </Route>
      <Route path="/Signup">
      <Signup/>
      </Route>
    </Switch>
         
       

    </div>
    </Router>
  ) 
}

export default App
