import React from "react";
import ReactApexChart from "react-apexcharts";


class OrderChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'series1',
                data: [31, 80, 100, 80, 60, 109, 90, 50, 89, 100, 54, 78]
            }],
            options: {
                chart: {
                    height: 300,
                    type: 'area',
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    show: false,
                    row: {
                        color: ['transparent'],
                        opacity: 0,
                    },
                    padding:{bottom:-10,left:8,right:0}
                },
                colors: ['#00C853'],
                xaxis: {
                    show:false,
                    type: 'month',
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    }
                },
                yaxis:{
                    show:false,
                    labels:{
                        show:false
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,      
                },                
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },
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


export default OrderChart