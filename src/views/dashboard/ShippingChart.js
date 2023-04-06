import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from 'lodash'
import moment from 'moment';
import data from '../../dashboardData.json';

const ShippingChart = ({ Date }) => {
    const startDate = moment(Date?.startDate).format("YYYY-MM-DD")
    const endDate = moment(Date?.endDate).format("YYYY-MM-DD")
    const dateString = Date.$d;
    const dateObject = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    const formattedDate = dateObject.format("DD-MM-YYYY");
 
    const [countPending,setCountPending] = useState({'Exworks': 0})
    const [countCompleted,setCountCompleted] = useState({"EcoFriendly":0})
    const [countProcessing,setCountProcessing] = useState({"Express":0})
    const countArray = [countPending,countCompleted,countProcessing]

    const handleStatusCount = () => {
        const countStatusPending = data.orders.filter((item) => item.deliverymethod === 'Exworks')
        let sumExworks = 0;
        countStatusPending.map((item)=> {
            sumExworks += item.total;
        })
        setCountPending({'Exworks':sumExworks})
        const countStatusCompleted = data.orders.filter((item) => item.deliverymethod === 'Eco Friendly')
        let sumEcoFriendly = 0;
        countStatusCompleted.map((item)=> {
            sumEcoFriendly += item.total;
        })
        setCountCompleted({"EcoFriendly":sumEcoFriendly})
        const countStatusProcessing = data.orders.filter((item) => item.deliverymethod === 'Express')
        let sumExpress = 0;
        countStatusProcessing.map((item)=> {
            sumExpress += item.total;
        })
        setCountProcessing({"Express":sumExpress})
    }

    const HandleStatusByDate = () => {
        const result = data.orders.filter((date) =>
        moment(date.order_date).format("YYYY-MM-DD") > startDate && moment(date.order_date).format("YYYY-MM-DD") <= endDate
         )
        
         if(result.length > 0){
            const countStatusPending = result.filter((item) => item.deliverymethod === 'Exworks')
            let sumExworks = 0;
            countStatusPending.map((item)=> {
                sumExworks += item.total;
            })
            setCountPending({'Exworks':sumExworks})
            const countStatusCompleted = result.filter((item) => item.deliverymethod === 'Eco Friendly')
            let sumEcoFriendly = 0;
            countStatusCompleted.map((item)=> {
                sumEcoFriendly += item.total;
            })
            setCountCompleted({"EcoFriendly":sumEcoFriendly})
            const countStatusProcessing = result.filter((item) => item.deliverymethod === 'Express')
            let sumExpress = 0;
            countStatusProcessing.map((item)=> {
                sumExpress += item.total;
            })
            setCountProcessing({"Express":sumExpress})
        }
    }


    useEffect(()=> {
        handleStatusCount()
        HandleStatusByDate()    
    },[Date])
    const series = countArray.map(item => {
        const [key, value] = Object.entries(item)[0];
        return {
          name: key,
          data: value
        };
      });
      const shippingMap = series.map(item => ({
        name: item.name,
        data: [item.data]
      }));
      console.log("🚀 ~ file: ShippingChart.js:75 ~ shippingMap ~ shippingMap:", shippingMap)
    const shippingMethod = {
        series: shippingMap,
        options: {
            chart: {
                type: 'bar',
                height: '100%',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    endingShape: 'rounded'
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            stroke: {
                colors: ['transparent'],
                width: 20
            },
            colors: ['#673AB7', '#00C853', '#2196F3'],
            xaxis: {
                categories: [""],
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                crosshairs: {
                    show: false
                },
            },
            grid: {
                show: false,
                row: {
                    color: ['transparent'],
                    opacity: 0
                },

            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                },
                show: false,
                labels: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return '$ ' + val + ' thousands';
                    }
                }
            },
            responsive: [
                {

                    breakpoint: 1400,
                    options: {
                        stroke: {
                            colors: ['transparent'],
                            width: 10
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '30%',
                                endingShape: 'rounded'
                            }
                        },
                    }

                },

                {
                    breakpoint: 991,
                    options: {
                        chart: {
                            height: '300px'
                        },
                        stroke: {
                            colors: ['transparent'],
                            width: 20
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '20%',
                                endingShape: 'rounded'
                            }
                        },
                    },
                },
                {
                    breakpoint: 545,
                    options: {
                        chart: {
                            height: '300px'
                        },
                        stroke: {
                            colors: ['transparent'],
                            width: 10
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '20%',
                                endingShape: 'rounded'
                            }
                        },
                    },
                }
            ]
        }
    }


    return (
        // <div id="chart" >
        <ReactApexChart options={shippingMethod.options} series={shippingMethod.series} type="bar" height="100%" width="100%" />
        // </div>
    );

}

export default ShippingChart;
