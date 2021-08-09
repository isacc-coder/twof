import React from 'react';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Clerk from './Pages/Clerk';
import Companies from './Pages/Companies';
import Login from './Pages/Login';
import Sender from './Pages/Sender';
import Signup from './Pages/Signup';
import ReactDOM from 'react-dom';
import { ProtectedRoute } from './protected.route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Switch>
          <Route exact path="/">
           <Login />
          </Route>
          <Sidebar>
            <ProtectedRoute exact path="/Home">
              <Home />
            </ProtectedRoute>
            <Route path="/Companies">
              <Companies />
            </Route>
            <Route path="/Sender">
              <Sender />
            </Route>
            <Route path="/Clerk">
              <Clerk />
            </Route>
          
          <Route path="/Signup">
            <Signup />
          </Route>
         </Sidebar>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
