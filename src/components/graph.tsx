import React from 'react';
import { Line } from "react-chartjs-2";
import {registerables } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(...registerables);

      
export default function LineChart () {
    let Options = {
        legend: {display: false},                                       
        scales: {
        yAxes: [{
            afterTickToLabelConversion:function(scaleInstance : any){
            scaleInstance.ticks[0]=null;
            scaleInstance.ticksAsNumbers[0]=null;
                },
            ticks: { min: 0, max:350,stepSize:100},
            gridLines: { display:false },
            }],
        xAxes:[{ticks:{display:false},gridLines:{tickMarkLength:50,display:false}}],
        },
    }

    let options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y:{
                ticks:{
                    min: 0,
                    max: 350,
                    stepSize:100,
                    color:'#959595',
                },
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    display: false
                    
                }
            },
            x:{
                ticks:{
                    display: false,
                },
                grid:{
                    display: false,
                    tickMarkLength: 50
                }
                
            },
            
        },
        plugins:{
            legend: {
               display: false
            },
        },
    }
    
    let xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    let yValues = [300,301,301,298,278,270,283,312,327,332,333,331,326,305,270,250,240,255,268,262,268,300,315,320,319,311,285,275,278,260,244,248,265,291,300,300,300];
        
    let data = {
        labels: xValues,
        datasets: [{
        pointBorderColor:"#986ffa",
        pointRadius:1,
        backgroundColor: "#986ffa",
        borderColor: "#986ffa",
        data: yValues
        }]
    }
    return (
    <Line data ={data} options={options} />
    )
}


