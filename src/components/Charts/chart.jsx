import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../Api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './charts.module.css';
import { red } from '@material-ui/core/colors';


const Chart = () => {
    // state = {
    //     dailyData :{}
    // } it is same representation of daily data and this,setstate({dailyData : setDailyData})

    const[dailyData, setDailyData] =  useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData( await fetchDailyData());

        }
        fetchAPI();
         }, [dailyData]);

         const lineChart = (
             dailyData.length ? (
                <Line
                     data = { { 
                        labels: dailyData.map(({date}) => date),
                        datasets : [{
                            data : dailyData.map(({confirmed}) => confirmed),
                            label : "Infected",
                            borderColor: "#3333ff",
                            fill : true
                        }, 
                        {
                        data : dailyData.map(({Deaths}) => Deaths),
                        label : "Deaths",
                        borderColor: "red",
                        fill : true
                    }],
                             }}
             
                     /> ) : null
         )
    return (
        <div className = {styles.container}>
            {lineChart}
            
        </div>
    )
}

export default Chart