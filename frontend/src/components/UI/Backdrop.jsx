import classes from './Backdrop.module.css';
import React from 'react';

const backkdrop = props =>
  props.show && <div className={classes.Backdrop} onClick={props.close}></div>;

export default backkdrop;
