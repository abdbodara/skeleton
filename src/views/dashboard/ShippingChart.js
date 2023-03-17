import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ShippingChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Exworks',
                    data: [76]
                },
                {
                    name: 'Eco Friendly',
                    data: [40]
                },
                {
                    name: 'Express',
                    data: [44]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
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
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                grid: {
                    show: false,
                    row: {
                        color: ['transparent'],
                        opacity: 0
                    }
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
                        breakpoint: 991,
                        options: {
                            stroke: {
                                colors: ['transparent'],
                                width: 10
                            }
                        }
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} width="100%" />
            </div>
        );
    }
}

export default ShippingChart;
