import React  from 'react';  import { Pie } from 'react-chartjs-2';


const PieChart = () => {
        return (
            <div>
              <Pie
               data = {{ labels: [
                'Pending SP',
                
                'active SP'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [8, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    //'rgba(255, 159, 64, 0.2)',
                   // 'rgba(255, 205, 86, 0.2)',
                   // 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    //'rgba(153, 102, 255, 0.2)',
                    //'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                   // 'rgb(255, 159, 64)',
                   // 'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    //'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    //'rgb(201, 203, 207)'
                  ],
                  hoverOffset: 10 }]
                        }} 
             /> 
              </div>
        );
    };
export default PieChart