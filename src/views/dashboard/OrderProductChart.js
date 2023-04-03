import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../dashboardData.json';


const OrderProductChart = ({ Date }) => {
    const dateString = Date.$d;
    const dateObject = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    const formattedDate = dateObject.format("DD-MM-YYYY");

    const [countProductOne, setCountProductOne] = useState()
    console.log("🚀 ~ file: OrderProductChart.js:13 ~ OrderProductChart ~ countProductOne:", countProductOne)
    const [countProductTwo, setCountProductTwo] = useState()
    const [countProductThree, setCountProductThree] = useState()
    const [countProductFour, setCountProductFour] = useState()

    const [countArray, setCountArray] = useState([])
    const [dataArray, setDataArray] = useState([]);
    console.log("🚀 ~ file: OrderProductChart.js:19 ~ OrderProductChart ~ dataArray:", dataArray)
    console.log("🚀 ~ file: OrderProductChart.js:76 ~ OrderProductChart ~ countArray:", countArray)



    const handleStatusCount = () => {
        const productOne = [];
        const productTwo = [];
        const productThree = [];
        const productFour = [];
 
            data.orders.map((item) => {
                const countProductOne = item.products.filter((product) => product.product_name === 'Product 1')
                productOne.push(...countProductOne)
                let pOne = 0;
                productOne.map((item) => {
                    pOne += item.quantity;
                })
                setCountProductOne(pOne)

                const countProductTwo = item.products.filter((product) => product.product_name === 'Product 2')
                productTwo.push(...countProductTwo)
                let pTwo = 0;
                productTwo.map((item) => {
                    pTwo += item.quantity;
                })
                setCountProductTwo(pTwo)

                const countProductThree = item.products.filter((product) => product.product_name === 'Product 3')
                productThree.push(...countProductThree)
                let pThree = 0;
                productThree.map((item) => {
                    pThree += item.quantity;
                })
                setCountProductThree(pThree)

                const countProductFour = item.products.filter((product) => product.product_name === 'Product 4')
                productFour.push(...countProductFour)
                let pFour = 0;
                productFour.map((item) => {
                    pFour += item.quantity;
                })
                setCountProductFour(pFour)
            })
        
    }

    const HandleStatusByDate = () => {
        const productOne = [];
        const productTwo = [];
        const productThree = [];
        const productFour = [];
        const result = data.orders.filter((date) => moment(date.order_date).format('DD-MM-YYYY')
         == formattedDate)
        console.log("🚀 ~ file: OrderProductChart.js:73 ~ HandleStatusByDate ~ result:", result)
        if(result.length > 0){
            result.map((item) => {
            const countProductOne = item.products?.filter((product) => product.product_name === 'Product 1')
            console.log("🚀 ~ file: OrderProductChart.js:77 ~ HandleStatusByDate ~ countProductOne:", countProductOne)
            productOne.push(...countProductOne)
            console.log("🚀 ~ file: OrderProductChart.js:78 ~ HandleStatusByDate ~ productOne:", productOne)
            let pOne = 0;
            productOne.map((item) => {
                pOne += item.quantity;
            })
            console.log("🚀 ~ file: OrderProductChart.js:79 ~ HandleStatusByDate ~ pOne:", pOne)
            setCountProductOne(pOne)

            const countProductTwo = item.products?.filter((product) => product.product_name === 'Product 2')
            productTwo.push(...countProductTwo)
            let pTwo = 0;
            productTwo.map((item) => {
                pTwo += item.quantity;
            })
            setCountProductTwo(pTwo)

            const countProductThree = item.products?.filter((product) => product.product_name === 'Product 3')
            productThree.push(...countProductThree)
            let pThree = 0;
            productThree.map((item) => {
                pThree += item.quantity;
            })
            setCountProductThree(pThree)

            const countProductFour = item.products?.filter((product) => product.product_name === 'Product 4')
            productFour.push(...countProductFour)
            let pFour = 0;
            productFour.map((item) => {
                pFour += item.quantity;
            })
            setCountProductFour(pFour)
        })
        }
    }


    useEffect(() => {
        handleStatusCount()
        HandleStatusByDate()
    }, [Date])

    useEffect(() => {
        setCountArray([countProductOne, countProductTwo, countProductThree, countProductFour])
    }, [countProductOne, countProductTwo, countProductThree, countProductFour])

    // useEffect(() => {
    //     // this code will run every time the countArray state is updated
    //     const data = countArray.map((item) => {
    //         if (item !== undefined) {
    //             const [key, value] = Object.entries(item)[0];
    //             return {
    //                 // name: key,
    //                 data: value
    //             };
    //         }
    //     })
    //     console.log("🚀 ~ file: OrderProductChart.js:93 ~ data ~ data:", data)

    //     const orderChart = data?.map((item) => {
    //         if (item !== undefined) {
    //             return {
    //                 // name: item.name,
    //                 data: [item.data]
    //             };
    //         }
    //     })
    //     console.log("🚀 ~ file: OrderProductChart.js:96 ~ orderChart ~ orderChart:", orderChart)

    //     console.log("🚀 ~ file: OrderProductChart.js:96 ~ orderChart ~ orderChart:", orderChart)
    //     if (orderChart !== undefined && orderChart.length > 0) {
    //         setDataArray(orderChart)
    //     }

    // }, [countArray])


    const orderProductData = {
        series: [
            {
                data: countArray
            }
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                events: {
                    click: function (chart, w, e) { }
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
            tooltip: {
                y: {
                    formatter: function (val) {
                        return '$ ' + val + ' thousands';
                    }
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

    return (
        <div id="chart">
            <ReactApexChart options={orderProductData?.options} series={orderProductData?.series} type="bar" height={300} />
        </div>
    );

}

export default OrderProductChart;
