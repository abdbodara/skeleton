import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';



const PaymentChart = ({ Date }) => {
    const startDate = moment(Date?.startDate).format("YYYY-MM-DD")
    const endDate = moment(Date?.endDate).format("YYYY-MM-DD")
    const paymentChart = {
        // series: [96, 85, 41],
        options: {
            labels: data.paymentchart.status,
            chart: {
                type: 'donut',

            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%'
                    },
                    customScale: 0.7

                }
            },

            legend: {
                position: 'bottom'
            }
        }
    };

    const [countStatusPending,setCountStatusPending] = useState(0)
    const [countStatusCompleted,setCountStatusCompleted] = useState(0)
    const [countStatusProcessing,setCountStatusProcessing] = useState(0)

    const countArray = [countStatusPending,countStatusCompleted,countStatusProcessing]
    console.log("🚀 ~ file: PaymentChart.js:45 ~ PaymentChart ~ countArray:", countArray)
    

    const handleStatusCount = () => {
        const countStatusPending = data.orders.filter((item) => item.paymentStatus === 'Pending')
        setCountStatusPending(countStatusPending?.length)
        const countStatusCompleted = data.orders.filter((item) => item.paymentStatus === 'Completed')
        setCountStatusCompleted(countStatusCompleted?.length)
        const countStatusProcessing = data.orders.filter((item) => item.paymentStatus === 'Processing')
        setCountStatusProcessing(countStatusProcessing?.length)
    }

    const HandleStatusByDate = () => {
        const result = data.orders.filter((date) =>
        moment(date.order_date).format("YYYY-MM-DD") > startDate && moment(date.order_date).format("YYYY-MM-DD") <= endDate
         )
        console.log("🚀 ~ file: StatusChart.js:59 ~ HandleStatusByDate ~ result:", result)
        if(result.length > 0){
            console.log("hereherehre")
            const countStatusPending = result.filter((item) => item.paymentStatus === 'Pending')
            setCountStatusPending(countStatusPending?.length)
            const countStatusCompleted = result.filter((item) => item.paymentStatus === 'Completed')
            setCountStatusCompleted(countStatusCompleted?.length)
            const countStatusProcessing = result.filter((item) => item.paymentStatus === 'Processing')
            setCountStatusProcessing(countStatusProcessing?.length)
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
                <ReactApexChart options={paymentChart.options} series={countArray} type="donut" />
            </div>
        );
}

export default PaymentChart;
