import styled from '@emotion/styled';

const DashboardStyle = styled.div`
    .main-dashboard {
        .main-title {
            padding: 10.5px 16px;
            background-color: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                color: #212121;
                font-size: 16px;
            }
            .breadcrumb-main {
                display: flex;
                align-items: center;
                gap: 13px;
                h4 {
                    color: #616161;
                    font-size: 12px;
                    font-weight: 400;
                    cursor: pointer;
                }
                svg {
                    &:first-child {
                        color: #673ab7;
                    }
                }
            }
        }
        .date-main {
            padding: 10px 16px;
            background-color: white;
            border-radius: 8px;
            width: max-content;
            margin: 11px 0;
            margin-left: auto;
            gap: 16px;
                display: flex;
                align-items: center;
            > div {
                gap: 16px;
                display: flex;
                align-items: center;
            }
        }
        .cards-main {
            display: flex;
            align-items: center;
            gap: 20px;
            @media (max-width: 991px) {
                gap: 10px;
                flex-wrap: wrap;
            }
            .card {
                border: 1px solid #e3f2fd;
                border-radius: 12px;
                display: flex;
                align-items: center;
                background-color: white;
                width: 25%;
                @media (max-width: 991px) {
                    width: calc(50% - 5px);
                }
                @media (max-width: 540px) {
                    width: 100%;
                }
                &:nth-child(2) {
                    .icon {
                        background: #d84315;
                    }
                    .text {
                        div {
                            color: #d84315;
                        }
                    }
                }
                &:nth-child(3) {
                    .icon {
                        background: #673ab7;
                    }
                    .text {
                        div {
                            color: #673ab7;
                        }
                    }
                }
                &:nth-child(4) {
                    .icon {
                        background: #00c853;
                    }
                    .text {
                        div {
                            color: #00c853;
                        }
                    }
                }
                .icon {
                    background: #2196f3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 90px;
                    height: 83px;
                    border-radius: 12px 0 0 12px;
                }
                .text {
                    height: 100%;
                    padding: 16px;
                    h4 {
                        color: #212121;
                        font-weight: 700;
                        font-size: 20px;
                        margin-bottom: 5px;
                    }
                    h6 {
                        display: flex;
                        align-items: center;
                        color: #757575;
                        gap: 5px;
                        div {
                            color: #2196f3;
                        }
                    }
                }
            }
        }
        .order-date {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            .order-main {
                background: #ffffff;
                border-radius: 12px;
                padding: 20px;
                width: 60%;
                h5 {
                    font-weight: 700;
                    font-size: 20px;
                    color: #212121;
                }
                p {
                    font-weight: 400;
                    font-size: 14px;
                    color: #757575;
                    margin-top: 10px;
                }
                .chart {
                    margin-top: 17px;
                }
            }
            .chart1 {
                background-color: white;
                border-radius: 12px;
                width: 40%;
                padding: 20px;
            }
        }
        .charts-main {
            margin-top: 20px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            .chart1 {
                background-color: white;
                border-radius: 12px;
                width: calc(33.3% - 14px);
                @media (max-width: 991px) {
                    width: calc(50% - 10px);
                    &:last-child {
                        width: 100%;
                    }
                }
                @media (max-width: 540px) {
                    width: 100%;
                }
                .title {
                    padding: 15px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #212121;
                    border-bottom: 1px solid #f5f5f5;
                }
                .chart {
                    padding: 25px 0;
                    &:nth-child(3) {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .apexcharts-legend-marker {
                        border-radius: 10px !important;
                    }
                }
            }
        }
        .last-row {
            margin-top: 20px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            .chart1 {
                background-color: white;
                border-radius: 12px;
                width: calc(40% - 10px);
                @media (max-width: 991px) {
                    width: 100%;
                }
                .title {
                    padding: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #212121;
                    border-bottom: 1px solid #f5f5f5;
                }
                .chart {
                    padding: 25px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    .apexcharts-legend-marker {
                        border-radius: 10px !important;
                    }
                    .content {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        @media (max-width: 540px) {
                            width: 100%;
                        }
                        .main {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .txt1 {
                                display: flex;
                                align-items: center;
                                gap: 15px;
                                .dot {
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 10px;
                                }
                                h5 {
                                    font-weight: 500;
                                    font-size: 14px;
                                    color: #212121;
                                }
                            }
                            .txt2 {
                                display: flex;
                                align-items: center;
                                gap: 15px;
                                color: #2196f3;
                                h5 {
                                    color: #2196f3;
                                    font-weight: 500;
                                    font-size: 14px;
                                }
                                svg {
                                    font-size: 20px;
                                }
                            }
                        }
                    }
                    .graph {
                        width: 50%;
                        @media (max-width: 540px) {
                            width: 100%;
                        }
                    }
                }
            }
            .table-main {
                background-color: white;
                border-radius: 12px;
                width: calc(60% - 10px);
                @media (max-width: 991px) {
                    width: 100%;
                }
                .title {
                    padding: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #212121;
                    border-bottom: 1px solid #f5f5f5;
                }
                .table-auto {
                    overflow-x: auto;
                    table {
                        width: 100%;
                        @media (max-width: 991px) {
                            width: 900px;
                            overflow-x: auto;
                        }
                        thead {
                            tr {
                                th {
                                    border-bottom: 1px solid #e3f2fd;
                                    text-align: start;
                                    padding: 10px 15px;
                                    svg {
                                        color: #616161;
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                        tbody {
                            tr {
                                td {
                                    border-bottom: 1px solid #e3f2fd;
                                    padding: 19px 15px;
                                    font-weight: 500;
                                    font-size: 12px;
                                    color: #212121;
                                    &:nth-child(3),
                                    &:nth-child(4),
                                    &:nth-child(5) {
                                        color: #616161;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default DashboardStyle;
