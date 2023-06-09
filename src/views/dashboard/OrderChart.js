import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _, { set } from 'lodash';

import data from '../../dashboardData.json';

import moment from 'moment';

import orders from '../../OrdersDummyData.json';



const OrderChart = ({ Date }) => {
    const startDate = moment(Date?.startDate).format("YYYY-MM-DD")
    const endDate = moment(Date?.endDate).format("YYYY-MM-DD")
    const [series, setSeries] = useState([{
        name: 'series1',
        data: []
    }]);

    const [options, setOptions] = useState({
        chart: {
            height: 300,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            row: {
                color: ['transparent'],
                opacity: 0
            },
            padding: { bottom: -10, left: 8, right: 0 }
        },
        colors: ['#00C853'],
        xaxis: {
            show: false,
            type: 'month',
            categories: [],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    });


    const [array, setArray] = useState([])
   

    const handleTotalOrder = () => {
        const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
        const uniqueMonths = [...new Set(results)];
   
        const march = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'March')
        const april = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'April')
        const may = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'May')
        const june = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'June')
        const july = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'July')
        const august = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'August')
        const september = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'September')
        const october = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'October')
        const november = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'November')
        const december = data.orders.filter((item) => moment(item.order_date).format('MMMM') === 'December')
        setArray([march?.length, april?.length, may?.length, june?.length, july?.length, august?.length, september?.length, october?.length, november?.length, december?.length]);
        setOptions((prevState) => ({ ...prevState, xaxis: { ...prevState.xaxis, categories: uniqueMonths } }));

    }

    function HandleOrderByDate() {
        const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
        const start = moment(startDate);
        const end = moment(endDate);
        const newMonths = [];

        while (start.isBefore(end) || start.isSame(end)) {
            newMonths.push(start.format('MMM YYYY'));
            start.add(1, 'month');
        }
        if (newMonths.length === 1) {
            const monthName = moment(newMonths[0], 'MMM YYYY').format('MMM');
            newMonths.unshift(`1 ${monthName}`);
        }
        const result = data.orders.filter((date) =>
            moment(date.order_date).format("YYYY-MM-DD") > startDate && moment(date.order_date).format("YYYY-MM-DD") <= endDate
        )
        const dataArr = [];
        if (result.length > 0) {
            newMonths.forEach((month) => {
                const datamain = result.filter((item) => moment(item.order_date).format("MMM YYYY") === month);
                dataArr.push(datamain.length);
            });
            if (dataArr.length > 1) {
                setArray(dataArr)
            } else {
                setArray([0, dataArr[0]])
            }
            setOptions((prevState) => ({ ...prevState, xaxis: { ...prevState.xaxis, categories: newMonths } }));
        }
    }

    useEffect(() => {
        handleTotalOrder()
        HandleOrderByDate()
    }, [Date]);

    useEffect(() => {
        setSeries([{
            name: 'series1',
            data: array
        }]);
    }, [array])

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={400} />
        </div>
    );
};


// existing once
// const OrderChart = ({ Date }) => {
//     const startDate = moment(Date?.startDate).format("YYYY-MM-DD")
//     const endDate = moment(Date?.endDate).format("YYYY-MM-DD")
//     const [series, setSeries] = useState([{
//         name: 'series1',
//         data: []
//     }]);

//     const [options, setOptions] = useState({
//         chart: {
//             height: 300,
//             type: 'area',
//             toolbar: {
//                 show: false
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         grid: {
//             show: false,
//             row: {
//                 color: ['transparent'],
//                 opacity: 0
//             },
//             padding: { bottom: -10, left: 8, right: 0 }
//         },
//         colors: ['#00C853'],
//         xaxis: {
//             show: false,
//             type: 'month',
//             categories: [],
//             axisTicks: {
//                 show: false
//             },
//             axisBorder: {
//                 show: false
//             }
//         },
//         yaxis: {
//             show: false,
//             labels: {
//                 show: false
//             }
//         },
//         stroke: {
//             show: true,
//             curve: 'smooth',
//             lineCap: 'butt',
//             colors: undefined,
//             width: 2,
//             dashArray: 0
//         },
//         tooltip: {
//             x: {
//                 format: 'dd/MM/yy HH:mm'
//             }
//         }
//     });

//     const [totalOrder, settotalOrders] = useState([4000, 4000, 4863, 7568, 7441, 4544])
//     console.log("🚀 ~ file: OrderChart.js:162 ~ OrderChart ~ totalOrder:", totalOrder)

//     function HandleOrder() {
//         let pid;
//         const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
//         const uniqueMonths = [...new Set(results)];

//         const result = data.orders.filter((date) =>
//         moment(date.order_date).format("YYYY-MM-DD") > startDate && moment(date.order_date).format("YYYY-MM-DD") <= endDate
//          )
//         .map((item) => {
//             return item
//         }
//             );
//         console.log("🚀 ~ file: OrderChart.js:87 ~ HandleOrder ~ result:", result)
//         const orders1 = orders.data.map((item) => item.lineItems);
//         orders1.forEach((item) => {
//             item.forEach((itema) => {
//                 pid = itema.quantity;
//             });
//         });
//         setSeries([{
//             name: 'series1',
//             data: totalOrder
//         }]);
//         console.log("🚀 ~ file: OrderChart.js:169 ~ HandleOrder ~ pid:", pid)
//         settotalOrders([pid, result.length])
//         setOptions((prevState) => ({ ...prevState, xaxis: { ...prevState.xaxis, categories: uniqueMonths } }));
//     }

//     useEffect(() => {
//         HandleOrder()
//     }, [Date]);

//     return (
//         <div id="chart">
//             <ReactApexChart options={options} series={series} type="area" height={300} />
//         </div>
//     );
// };

export default OrderChart;
