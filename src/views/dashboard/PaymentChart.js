import React from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';

class PaymentChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: data.paymentchart.paymentchartSeries,
            options: {
                labels: data.paymentchart.status,
                chart: {
                    type: 'donut',
                    width: '100%'
                },
                dataLabels: {
                    enabled: false
                },
                pie: {
                    donut: {
                        size: '45%'
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="100%" />
            </div>
        );
    }
}

export default PaymentChart;
