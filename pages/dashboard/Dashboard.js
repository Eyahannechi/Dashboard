import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button, IconButton
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
//mport { Typography } from "../../components/Wrappers";
//import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
//import { Group as GroupIcon  } from '@material-ui/icons'
//const mainChartData = getMainChartData();
import Doughnut from "./components/Charts/Doughnut"
import Pie from "./components/Charts/Pie"

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();
  const[date, setDate] = useState(new Date());
  const onchange = date => {
      setDate(date);
  };
  // local
  //var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
     
        
      <PageTitle title="Dashboard" />
    <Grid container spacing={4}>
    {mock.bigStat.map(stat => (
          <Grid item lg={3} md={4} sm={2} xs={1} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))}
        
       < Grid  item lg={4}  md={4} sm={6} xs={6}>
          <Widget
            title=  " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Statistics Of Jobs"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          ><div>
            <Doughnut/>
          </div>
          </Widget>
        </Grid>
        < Grid item  lg={4}  md={4} sm={6} xs={6}>
          <Widget
            title="Statistics of Services Providers"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          ><div>
            <Pie/>
          </div>
          </Widget>
        </Grid>
        <Grid item lg={4}  md={4} sm={6} xs={6} >
        <Widget
            title="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Calendar"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody} >
               <Calendar onchange={onchange} value ={date}/>
        </Widget>
        </Grid> 
        <Grid item xs={6}>
          <Widget
            
          >
           
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}
