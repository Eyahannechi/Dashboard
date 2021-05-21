import React, { useState } from "react";
import { Grid, IconButton, makeStyles, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";

import classnames from "classnames";
import { FaRegEdit  } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineGold } from "react-icons/ai";

// styles
import useStyles from "./styles";
import { Switch } from '@material-ui/core';
// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";
import Spacer from "react-add-space";
export default function BigStat(props) {
  var {  toggle, box ,text, icon} = props;
  var classes = useStyles();
  //var theme = useTheme();
 

  return (
    <Widget
    > 
    
      <div className={classes.totalValueContainer}>
     
        <div className={classes.totalValue}>
    
       {/*&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; */}
        <Grid container item alignItems="right">
       
   
  
      {box} 
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {icon},
        </Grid>
        </div>
        <Grid container alignItems="center">
        {text}     
    
      </Grid>
    
      </div>
      <Spacer amount={37} />    {toggle}
      <div className={classes.bottomStatsContainer}>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
          <IconButton>
            <FaRegEdit
        style={{ fontSize: 30 }} />
           </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
          &nbsp; &nbsp;&nbsp;Edit
          </Typography>
        </div>
        <div className={classes.statCell}>
          <Grid container alignItems="center">
          <IconButton>
          < RiDeleteBin5Line
        style={{ fontSize:30 }} />
        </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
          &nbsp;&nbsp; Delete
          </Typography>
        </div>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
          <IconButton>
           &nbsp;&nbsp; <AiOutlineGold 
        style={{ fontSize:32 }} />
           </IconButton>
          </Grid>      
          <Typography size="sm" color="text" colorBrightness="secondary">
            View Subcategory
          </Typography>
        </div>
      </div>
    </Widget>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
