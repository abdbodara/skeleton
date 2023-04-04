// material-ui
import { IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import moment from 'moment';
import { DateRangePicker } from "materialui-daterange-picker";
// project imports
import * as React from 'react';
import DashboardStyle from './DashboardStyle';
import { CalendarIcon, CartIcon, ProductIcon, SmileIcon, ViewIcon, WalletIcon } from 'assets/AllSvg';
import OrderChart from './OrderChart';
import StatusChart from './StatusChart';
import ShippingChart from './ShippingChart';
import OrderProductChart from './OrderProductChart';
import data from '../../dashboardData.json';
import orders from '../../OrdersDummyData.json';
import PaymentChart from './PaymentChart';
import WorldMap from './WorldMap';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function Dashboard() {
    const [date, setDate] = useState(new Date());
    console.log('🚀 ~ file: index.js:28 ~ Dashboard ~ date:', date);
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [dateRange, setDateRange] = useState({});
    console.log("🚀 ~ file: index.js:32 ~ Dashboard ~ dateRange:", dateRange)

    const handleClick = (event) => {
        setIsOpen((isOpen) => !isOpen);
        setAnchorEl(event.currentTarget);
    };
    const toggle = () => setIsOpen(!isOpen);
    const onChangeHandler = (_date, keyboardInputValue) => {
        if (_date) {
            setDate(_date);
        }
    };

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
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <IconButton
                            onClick={handleClick}
                            color="secondary"
                            aria-label="data"
                        >
                            <CalendarIcon />
                        </IconButton>
                    </LocalizationProvider>
                </Box>
                <Box sx={{ width: 'fit-content', marginLeft: 'auto', position: 'absolute', top: '230px', right: '40px' }}>
                    <DateRangePicker
                        open={isOpen}
                        toggle={toggle}
                        onChange={(range) => setDateRange(range)}
                    />
                </Box>
                <Box className="cards-main">
                    <Box className="card">
                        <Box className="icon">
                            <WalletIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">Days{orders.data.reduce((total, item) => total + item?.total, 0)}</Typography>
                            <Typography variant="h6">
                                Average <Box>Processing Time</Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className="icon">
                            <CartIcon />
                        </Box>
                        <Box className="text">
                            <Typography variant="h4">{orders.data.length}</Typography>
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
                <Box className="order-date">
                    <Box className="order-main">
                        <Typography variant="h5">Orders</Typography>
                        <Typography>Orders by date</Typography>
                        <Box className="chart">
                            <OrderChart Date={date} />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">Order Statuses</Box>
                        <Box className="chart">
                            <StatusChart Date={dateRange} />
                        </Box>
                    </Box>
                </Box>
                <Box className="charts-main">
                    <Box className="chart1">
                        <Box className="title">Payment Statuses</Box>
                        <Box className="chart">
                            <PaymentChart Date={dateRange} />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">Payment Statuses</Box>
                        <Box className="chart">
                            <WorldMap />
                        </Box>
                    </Box>
                    <Box className="chart1" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box className="title">Shipping Methods</Box>
                        <Box className="chart" sx={{ height: '100%' }}>
                            <ShippingChart Date={dateRange} />
                        </Box>
                    </Box>
                </Box>
                <Box className="last-row">
                    <Box className="chart1">
                        <Box className="title">Most ordered products</Box>
                        <Box className="chart">
                            <Box className="content">
                                {data.Orderedproducts?.map((item) => (
                                    <Box className="main">
                                        <Box className="txt1">
                                            <Box className="dot" style={{ background: item.colors }} />
                                            <Typography variant="h5">{item.name}</Typography>
                                        </Box>
                                        <Box className="txt2">
                                            <ArrowUpwardIcon />
                                            <Typography variant="h5">2%</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <Box className="graph">
                                <OrderProductChart Date={dateRange} />
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
                                    {orders.data.map((item) => (
                                        <tr>
                                            <td>{item.internalId}</td>
                                            <td>#{item.purchaseOrderNumber}</td>
                                            <td>{moment(item.createdAt).format('DD.MM.YYYY')}</td>
                                            <td>${item.total}</td>
                                            <td>{item.shippingMethod.displayName}</td>
                                            <td>
                                                <ViewIcon />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DashboardStyle>
    );
}
