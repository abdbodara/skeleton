import React from "react";
import ReactApexChart from "react-apexcharts";

class StatusChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [96, 85, 41],
            options: {
                chart: {
                    type: 'donut',
                    width:"100%"
                },
                dataLabels: {
                    enabled: false
                },          
                pie: {
                    donut: {
                        size: '65%'
                    }
                },
                legend: {
                    position: 'bottom'
                },
                responsive: [{
                    breakpoint: 480,
                }]
            },
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

export default StatusChart