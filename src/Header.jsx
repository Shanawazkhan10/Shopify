import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

function Header() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-10">
         <text style={{textAlign:'center',fontSize:38,marginLeft:50}}>SHOPIFY</text>
          </div>
          <div className="col-2">
     <NotificationsOutlinedIcon fontSize="large" style={{marginTop:14}}/>
          </div>
        </div>
       <hr/>
      </div>
    )
}

export default Header
