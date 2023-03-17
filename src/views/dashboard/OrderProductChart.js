import React from 'react';
import ReactApexChart from 'react-apexcharts';

class OrderProductChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    data: [28, 14, 16, 24]
                }
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {}
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#2196F3', '#00C853', '#F65F54', '#D84315'],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                grid: {
                    show: false,
                    row: {
                        color: ['transparent'],
                        opacity: 0
                    }
                },
                dataLabels: {
                    enabled: false
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
                legend: {
                    show: false
                },
                xaxis: {
                    show: false,
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        show: false
                    }
                }
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
            </div>
        );
    }
}

export default OrderProductChart;
