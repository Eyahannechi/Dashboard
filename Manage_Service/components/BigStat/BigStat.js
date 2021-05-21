import React, { useState } from "react";
import { Grid, IconButton, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";
import { FaRegEdit  } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineGold } from "react-icons/ai";
// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce ,text, icon} = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  return (
    <Widget
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
        <Grid container alignItems="center">
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {icon}
         </Grid>
        </div>
        <Grid container alignItems="center">
        {text}
         </Grid>
   
      </div>
      <div className={classes.bottomStatsContainer}>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
          <IconButton>
           <FaRegEdit
        style={{ fontSize: 30 }} />
           </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
          &nbsp;&nbsp; Edit
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
