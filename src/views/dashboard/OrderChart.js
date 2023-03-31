import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from 'lodash';
import data from '../../dashboardData.json';
console.log("🚀 ~ file: OrderChart.js:94 ~ data:", data)
import moment from 'moment';
import orders from '../../OrdersDummyData.json';
console.log("🚀 ~ file: OrderChart.js:97 ~ orders:", orders)

const OrderChart = ({ Date }) => {
    console.log("🚀 ~ file: OrderChart.js:98 ~ OrderChart ~ date:", Date.$d)

    const dateString = Date.$d;
    const dateObject = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    const formattedDate = dateObject.format("YYYY-MM-DDTHH:mm:ss[Z]");
    console.log("🚀 ~ file: OrderChart.js:103 ~ OrderChart ~ formattedDate:", formattedDate)
    const [series, setSeries] = useState([{
        name: 'series1',
        data: []
    }]);
    console.log("🚀 ~ file: OrderChart.js:109 ~ OrderChart ~ series:", series)
    console.log("🚀 ~ file: OrderChart.js:103 ~ OrderChart ~ series:", series)
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

    const [totalOrder, settotalOrders] = useState([4000, 4000, 4863, 7568, 7441, 4544])
    console.log("🚀 ~ file: OrderChart.js:162 ~ OrderChart ~ totalOrder:", totalOrder)

    function HandleOrder() {
        let pid;
        const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
        const result = data.orders.filter((date) => moment(date.order_date).format('DD-MM-YYYY') === moment(formattedDate).format('DD-MM-YYYY'))
        .map((item) => {
            return item
        }
            );
        const orders1 = orders.data.map((item) => item.lineItems);
        orders1.forEach((item) => {
            item.forEach((itema) => {
                pid = itema.quantity;
            });
        });
        setSeries([{
            name: 'series1',
            data: totalOrder
        }]);
        console.log("🚀 ~ file: OrderChart.js:169 ~ HandleOrder ~ pid:", pid)
        settotalOrders([pid, result.length])
        setOptions((prevState) => ({ ...prevState, xaxis: { ...prevState.xaxis, categories: results } }));

    }

    useEffect(() => {
        HandleOrder()
    }, [Date]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={300} />
        </div>
    );
};

export default OrderChart;
// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import _ from 'lodash';
// import data from '../../dashboardData.json';
// import moment from 'moment';
// import orders from '../../OrdersDummyData.json';

// class OrderChart extends React.Component {
//     constructor(props) {
//         let pid;
//         const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
//         const orders1 = orders.data.map((item)=>item.lineItems)
//         orders1.map((item)=>{
//         item.map((itema)=>{
//             pid = itema.quantity

//         })
//         })
//         super(props);
//         this.state = {
//             series: [
//                 {
//                     name: 'series1',
//                     data: [pid, 8064, 8000, 8034, 6078, 5033, 3030, 4033, 6333, 2323, 7809,9505]
//                 }
//             ],
//             options: {
//                 chart: {
//                     height: 300,
//                     type: 'area',
//                     toolbar: {
//                         show: false
//                     }
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 grid: {
//                     show: false,
//                     row: {
//                         color: ['transparent'],
//                         opacity: 0
//                     },
//                     padding: { bottom: -10, left: 8, right: 0 }
//                 },
//                 colors: ['#00C853'],
//                 xaxis: {
//                     show: false,
//                     type: 'month',
//                     categories: results,
//                     axisTicks: {
//                         show: false
//                     },
//                     axisBorder: {
//                         show: false
//                     }
//                 },
//                 yaxis: {
//                     show: false,
//                     labels: {
//                         show: false
//                     }
//                 },
//                 stroke: {
//                     show: true,
//                     curve: 'smooth',
//                     lineCap: 'butt',
//                     colors: undefined,
//                     width: 2,
//                     dashArray: 0
//                 },
//                 tooltip: {
//                     x: {
//                         format: 'dd/MM/yy HH:mm'
//                     }
//                 }
//             }
//         };
//     }
//     render() {
//         return (
//             <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
//             </div>
//         );
//     }
// }

// export default OrderChart;
