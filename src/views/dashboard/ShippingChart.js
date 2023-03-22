import React from 'react';
import ReactApexChart from 'react-apexcharts';
import orders from '../../OrdersDummyData.json'
import _ from 'lodash'

class ShippingChart extends React.Component {
    constructor(props) {
        const results = orders.data.map(o=>o.shippingMethod)
        super(props);

        this.state = {
            series: [
                {
                    name: Object.keys(_.groupBy(results,'displayName')),
                    data: Object.keys(_.groupBy(results,'price'))
                },
                {
                    name: 'Eco Friendly',
                    data: [1500]
                },
                {
                    name: 'Express',
                    data: [300]
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
