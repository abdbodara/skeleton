// material-ui
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import moment from 'moment';

// project imports
import * as React from 'react';
import DashboardStyle from './DashboardStyle';
import { CalendarIcon, CartIcon, ProductIcon, SmileIcon, ViewIcon, WalletIcon } from 'assets/AllSvg';
import OrderChart from './OrderChart';
import StatusChart from './StatusChart';
import ShippingChart from './ShippingChart';
import OrderProductChart from './OrderProductChart';
import data from '../../dashboardData.json';
import PaymentChart from './PaymentChart';

export default function Dashboard() {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    let results = data.orders.map((o) => o.status);
    const resultddddd = _.groupBy(data.orders, 'status');
    console.log('🚀 ~ file: index.js:28 ~ Dashboard ~ resultddddd:');
    // const cats = data.orders.reduce((catsSoFar, { category, title }) => {
    //     if (!catsSoFar[category]) catsSoFar[category] = [];
    //     catsSoFar[category].push(title);
    //     return catsSoFar;
    //   }, {});
    console.log('🚀 ~ file: index.js:26 ~ Dashboard ~ results:', _.groupBy(results));

    return (
        <DashboardStyle>
            <Box className="main-dashboard">
                <Box className="main-title">
                    <Box className="title">Dashboard</Box>
                    <Box className="breadcrumb-main">
                        <HomeIcon />
                        <ChevronRightIcon />
                        <Typography variant="h4">Dashboard</Typography>
                    </Box>
                </Box>
                <Box className="date-main">
                    <Box>
                        <Typography>Filter by Date</Typography>
                        <CalendarIcon />
                    </Box>
                </Box>
                <Box className="cards-main">
                    <Box className="card">
                        <Box className="icon">
                            <WalletIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">${data.orders.reduce((total, item) => total + item.total, 0).toFixed(2)}</Typography>
                            <Typography variant="h6">
                                Total <Box>spent</Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className="icon">
                            <CartIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">{data.orders.length}</Typography>
                            <Typography variant="h6">
                                Total <Box>Orders</Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className="icon">
                            <ProductIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">{data.products.length}</Typography>
                            <Typography variant="h6">
                                Total <Box>Products</Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className="icon">
                            <SmileIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">276</Typography>
                            <Typography variant="h6">
                                Total <Box>Resolved Tickets</Box>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="order-main">
                    <Typography variant="h5">Orders</Typography>
                    <Typography>Orders by date</Typography>
                    <Box className="chart">
                        <OrderChart />
                    </Box>
                </Box>
                <Box className="charts-main">
                    <Box className="chart1">
                        <Box className="title">Order Statuses</Box>
                        <Box className="chart">
                            <StatusChart />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">Payment Statuses</Box>
                        <Box className="chart">
                            <PaymentChart />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">Shipping Methods</Box>
                        <Box className="chart">
                            <ShippingChart />
                        </Box>
                    </Box>
                </Box>
                <Box className="last-row">
                    <Box className="chart1">
                        <Box className="title">Most ordered products</Box>
                        <Box className="chart">
                            <Box className="content">
                                {data.Orderedproducts?.map((item) => {
                                    return (
                                        <Box className="main">
                                            <Box className="txt1">
                                                <Box className="dot" style={{ background: item.colors }}></Box>
                                                <Typography variant="h5">{item.name}</Typography>
                                            </Box>
                                            <Box className="txt2">
                                                <ArrowUpwardIcon />
                                                <Typography variant="h5">2%</Typography>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className="graph">
                                <OrderProductChart />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="table-main">
                        <Box className="title">Processing orders</Box>
                        <Box className="table-auto">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            ID <ArrowDownwardIcon />
                                        </th>
                                        <th>
                                            PO <ArrowDownwardIcon />
                                        </th>
                                        <th>
                                            Created At <ArrowDownwardIcon />
                                        </th>
                                        <th>
                                            Total <ArrowDownwardIcon />
                                        </th>
                                        <th>
                                            Delivery Method <ArrowDownwardIcon />
                                        </th>
                                        <th>
                                            View <ArrowDownwardIcon />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.orders
                                        .filter((item) => item.status === 'Completed')
                                        .map((item) => {
                                            return (
                                                <tr>
                                                    <td>{item.order_id}</td>
                                                    <td>{item.po}</td>
                                                    <td>{moment(item.order_date).format('DD.MM.YYYY')}</td>
                                                    <td>${item.total}</td>
                                                    <td>{item.deliverymethod}</td>
                                                    <td>
                                                        <ViewIcon />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DashboardStyle>
    );
}
