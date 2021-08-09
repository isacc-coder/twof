import React from 'react'
import  auth from '../auth';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const Logout = props => {
    return (
        <div>
            <Button> 
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      />
        Logout
    </Button>
     <Button
        onClick={() => {
          auth.login(() => {
            props.history.push("/Home");
          });
        }}
      >
        Login
      </Button>
        </div>
    )
}
