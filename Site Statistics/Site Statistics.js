
import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
//import { Typography } from "../../components/Wrappers";
import { Bar ,Line}  from 'react-chartjs-2';

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Site Statistics" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Jobs For last 3 Months" disableWidgetMenu>
            <div className={classes.dashedBorder}>
            <Bar data = {{ labels: [
                'Mar-21',
                'Apr-21', 'May-21'
              ],

                datasets: [{
                  label: 'Cancelled Jobs',
                  data: [0,3, 2],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                   
                  ],
                  borderWidth: 1,
                },{
                label:'Finished Jobs' ,
                data:[3,1,5],
                backgroundColor: [
                    //'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                    //'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                  ],
                  borderWidth: 1,},

            

            ],}}
                    
            width={600}
            height={400}
            options={{ maintainAspectRatio: false,}} 
               
             /> 
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Registered Users For last 3 Months" disableWidgetMenu>
            <div className={classes.dashedBorder}>
            <Bar data = {{ labels: [
                'Mar-21',
                'Apr-21', 'May-21'
              ],

                datasets: [{
                  label: ' Service Providers',
                  data: [5,6, 8],
                  backgroundColor: [
                   
                    'rgba(255, 205, 86, 0.2)',
                   
                  ],
                  borderColor: [
                    
                    'rgb(255, 159, 64)',
                   
                  ],
                  borderWidth: 1,
                },{
                label:'Users' ,
                data:[2,5,6],
                backgroundColor: [
                   
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    
                    
                    'rgb(153, 102, 255)',
                    
                  ],
                  borderWidth: 1,},

            
            ],}}
                
            width={600}
            height={400}
            options={{ maintainAspectRatio: false,}} 
               
             /> 
            
   
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title=" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Statistics of Jobs" >
            <div className={classes.dashedBorder}>
          
            < Line data = {{ labels: [
                'Jan.',
                'Feb.',
                'Mar.',
                'Apr.',
                'May.',
                'Jun.',
                'Jul.',
                'Aug.',
                'Sep.',
                'Oct.',
                'Nov.',
                'Dec.'

              ],
  
           datasets: [{
    label: 'Finished Jobs',
    data: [20, 10, 80, 81, 56, 55, 40,10,60,54,70,20],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
            },
             { label: 'Cancelled Jobs',
            data: [65, 10, 70, 81, 50, 55, 40],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1 
              },
              { label:'On Going Jobs',
            data: [40, 10, 90, 81, 50, 60, 40],
            fill: false,
            borderColor: 'rgb(255, 159, 64)',
            tension: 0.1 
              },
            ],}}
              width={900}
            height={390}
            options={{ maintainAspectRatio: false,}}/>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Statistics of Service Providers" disableWidgetMenu>
            <div className={classes.dashedBorder}>
            < Line data = {{ labels: [
                 'Jan.',
                 'Feb.',
                 'Mar.',
                 'Apr.',
                 'May.',
                 'Jun.',
                 'Jul.',
                 'Aug.',
                 'Sep.',
                 'Oct.',
                 'Nov.',
                 'Dec.'
              ],
  
           datasets: [{
    label: 'Active Service Providers',
    data: [65, 10, 80, 81, 56, 55, 40,54,10,20,16,45,58],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
            },
             { label: 'Pending Service Providers ',
            data: [65, 10, 70, 81, 50, 55, 40],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1 
              },
              
            ],}}
              width={900}
            height={390}
            options={{ maintainAspectRatio: false,}}/> 
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
