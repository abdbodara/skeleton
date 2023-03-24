import React from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';

class StatusChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: data.statuschart.statuschartseries,
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
                        },
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

export default StatusChart;
