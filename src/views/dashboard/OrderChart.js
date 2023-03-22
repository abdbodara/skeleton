import React from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from 'lodash';
import data from '../../dashboardData.json';
import moment from 'moment';
import orders from '../../OrdersDummyData.json';

class OrderChart extends React.Component {
    constructor(props) {
        let pid;
        const results = data.orders.map((o) => moment(o.order_date).format('MMM'));
        const orders1 = orders.data.map((item)=>item.lineItems)
        orders1.map((item)=>{
           item.map((itema)=>{
            pid = itema.quantity

          })
        })
        super(props);
        this.state = {
            series: [
                {
                    name: 'series1',
                    data: [pid, 8064, 8000, 8034, 6078, 5033, 3030, 4033, 6333, 2323, 7809,9505]
                }
            ],
            options: {
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
                    categories: results,
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
            }
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
            </div>
        );
    }
}

export default OrderChart;
