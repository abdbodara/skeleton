import React from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';
import orders from '../../OrdersDummyData.json'
import _ from 'lodash'

class PaymentChart extends React.Component {
    constructor(props) {
        let orderStatus, price;
        const results = orders.data.map(o => o.paymentStatus).map((item) => {
            orderStatus = _.groupBy(item, 'displayName')
        })


        super(props);
        this.state = {
            series: [96, 85, 41],
            options: {
                labels: [Object.keys(orderStatus), "Completed", "Processing"],
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
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
            </div>
        );
    }
}

export default PaymentChart;
