import React, { useState } from "react";
import {  Select, MenuItem, Input } from "@material-ui/core";
//import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
//import { BarChart, Bar } from "recharts";
//import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";
//import { Group as GroupIcon  } from '@material-ui/icons'
import {IconButton} from "@material-ui/core";

export default function BigStat(props) {
  var { product, total , icon} = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  return (
    <Widget
      header={
        <div className={classes.title}>
          <Typography variant="h5">{product}</Typography>

          <Select
            value={value}
            onChange={e => setValue(e.target.value)}
            input={
              <Input
                disableUnderline
                classes={{ input: classes.selectInput }}
              />
            }
            className={classes.select}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </div>
      }
      upperTitle
      bodyClass={classes.bodyWidgetOverflow}
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography size="xxl" color="text" colorBrightness="secondary">
           {total[value]}
          
           <IconButton  aria-label="Group">
            {icon}
          </IconButton>
          </Typography>
         
          
        </div>
       
      
        </div>
    </Widget>
  );
}

// #######################################################################

