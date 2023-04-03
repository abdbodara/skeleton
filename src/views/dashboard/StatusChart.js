/* eslint-disable react/destructuring-assignment */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';





const StatusChart =({ Date })=>{
    const dateString = Date.$d;
    const dateObject = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    const formattedDate = dateObject.format("DD-MM-YYYY");
    const statusData = {
        options: {
            labels: data.statuschart.status,
            chart: {
                type: 'donut',
                width: '100%'
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    customScale: 0.7,
                    donut: {
                        size: '70%'
                    }
                }
            },

            legend: {
                position: 'bottom'
            }
        }
    }

    const [countPending,setCountPending] = useState(0)
    const [countCompleted,setCountCompleted] = useState(0)
    const [countProcessing,setCountProcessing] = useState(0)

    const countArray = [countPending,countCompleted,countProcessing]
    console.log("🚀 ~ file: StatusChart.js:39 ~ handleStatusCount ~ countArray:", countArray)

    const handleStatusCount = () => {
        const countStatusPending = data.orders.filter((item) => item.status === 'Pending')
        setCountPending(countStatusPending?.length)
        const countStatusCompleted = data.orders.filter((item) => item.status === 'Completed')
        setCountCompleted(countStatusCompleted?.length)
        const countStatusProcessing = data.orders.filter((item) => item.status === 'Processing')
        setCountProcessing(countStatusProcessing?.length)
    }

    const HandleStatusByDate = () => {
        const result = data.orders.filter((date) => moment(date.order_date).format('DD-MM-YYYY')
         == formattedDate)
        console.log("🚀 ~ file: StatusChart.js:59 ~ HandleStatusByDate ~ result:", result)
        if(result.length > 0){
            console.log("hereherehre")
            const countStatusPending = result.filter((item) => item.status === 'Pending')
            setCountPending(countStatusPending?.length)
            const countStatusCompleted = result.filter((item) => item.status === 'Completed')
            setCountCompleted(countStatusCompleted?.length)
            const countStatusProcessing = result.filter((item) => item.status === 'Processing')
            setCountProcessing(countStatusProcessing?.length)
        }
    }

    // useEffect(()=> {
    // },[])
    
    useEffect(()=> {
        handleStatusCount()
        HandleStatusByDate()    
    },[Date])

      

        return (
            <div id="chart">
                <ReactApexChart options={statusData.options} series={countArray} type="donut" width="100%" />
            </div>
        );
}

export default StatusChart;
