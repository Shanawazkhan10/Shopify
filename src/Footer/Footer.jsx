import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
function Footer() {
    return (
        <div>
          <div className="container footer__css">
              <div className="row mt-3">
                  <div className="col" style={{color:'red'}}><HomeOutlinedIcon /><br/><text style={{fontSize:11}}>HOME</text></div>
                  <div className="col"><CategoryOutlinedIcon/><br/><text style={{fontSize:11}}>Category</text></div>
                  <div className="col"><FavoriteBorderOutlinedIcon/><br/><text style={{fontSize:11}}>Wishlist</text></div>
                  <div className="col"><ShoppingCartOutlinedIcon/><br/><text style={{fontSize:11}}>Mycart</text></div>
                  <div className="col"><PersonOutlineOutlinedIcon/><br/><text style={{fontSize:11}}>Profile</text></div>
              </div>
              <br/>
          </div>
        </div>
    )
}

export default Footer
