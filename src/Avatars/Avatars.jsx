import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import men from "../assets/avatar/me.png"
import wo from "../assets/avatar/wo.png"
import bo from "../assets/avatar/bo.png"
import gi from "../assets/avatar/gi.png"
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1.8),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
const refer =()=>{
    window.location.href="/Mens"
  }
export default function ImageAvatars() {
  const classes = useStyles();

  return (
  
    <div className={classes.root} style={{placeContent:'center'}}>
      <div onClick={refer}><Avatar alt="Remy Sharp" src={men} className={classes.large}/><p>MEN</p></div>
      <div><Avatar alt="Remy Sharp" src={wo} className={classes.large}/><p>WOMEN</p></div>
      <div><Avatar alt="Remy Sharp" src={bo} className={classes.large}/><p>BOY</p></div>
      <div><Avatar alt="Remy Sharp" src={gi} className={classes.large}/><p>GIRL</p></div>
    </div>
  );
}
