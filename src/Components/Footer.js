import React from "react";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div>  
      <span  style={{float : 'left'}}>
    <Typography variant="h6">
      <a style={{textDecoration: 'none'}} href="https://github.com/Strategizer/app">Open Source</a>
    </Typography></span>
      <span  style={{float : 'right'}}>
    <Typography variant="h6">
      <Link style={{textDecoration: 'none'}} to="/contributors">Contributors</Link>
    </Typography></span>
    </div>
  );
};

export default Footer;
