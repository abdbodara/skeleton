// material-ui
import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MainCard from 'ui-component/cards/MainCard';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// project imports
import * as React from 'react';
import DashboardStyle from './DashboardStyle';
import { CalendarIcon, WalletIcon } from 'assets/AllSvg';
import OrderChart from './OrderChart';
import StatusChart from './StatusChart';
import ShippingChart from './ShippingChart';

export default function Dashboard() {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <DashboardStyle>
            <Box className="main-dashboard">
                <Box className='main-title'>
                    <Box className="title">Dashboard</Box>
                    <Box className='breadcrumb-main'>
                        <HomeIcon />
                        <ChevronRightIcon />
                        <Typography variant='h4'>Dashboard</Typography>
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
                        <Box className='icon'><WalletIcon /></Box>
                        <Box className='text'>
                            <Typography variant='h4'>$423,945</Typography>
                            <Typography variant='h6'>Total <Box>spent</Box></Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className='icon'><WalletIcon /></Box>
                        <Box className='text'>
                            <Typography variant='h4'>2,128</Typography>
                            <Typography variant='h6'>Total <Box>Orders</Box></Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className='icon'><WalletIcon /></Box>
                        <Box className='text'>
                            <Typography variant='h4'>1,113</Typography>
                            <Typography variant='h6'>Total <Box>Products</Box></Typography>
                        </Box>
                    </Box>
                    <Box className="card">
                        <Box className='icon'><WalletIcon /></Box>
                        <Box className='text'>
                            <Typography variant='h4'>276</Typography>
                            <Typography variant='h6'>Total <Box>Resolved Tickets</Box></Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="order-main">
                    <Typography variant='h5'>Orders</Typography>
                    <Typography>Orders by date</Typography>
                    <Box className='chart'>
                        <OrderChart />
                    </Box>
                </Box>
                <Box className="charts-main">
                    <Box className="chart1">
                        <Box className="title">
                            Order Statuses
                        </Box>
                        <Box className="chart">
                            <StatusChart />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">
                            Payment Statuses
                        </Box>
                        <Box className="chart">
                            <StatusChart />
                        </Box>
                    </Box>
                    <Box className="chart1">
                        <Box className="title">
                            Shipping Methods
                        </Box>
                        <Box className="chart">
                            <ShippingChart />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DashboardStyle>
    );
}
