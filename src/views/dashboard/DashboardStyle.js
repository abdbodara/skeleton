import styled from '@emotion/styled';

const DashboardStyle = styled.div`
    .main-dashboard{
        .main-title{
            padding: 10.5px 16px;
            background-color: white;
            border-radius: 8px;
            display:flex;
            align-items: center;
            justify-content: space-between;
            .title{
                color: #212121;
                font-size: 16px;
            }
            .breadcrumb-main{
                display: flex;
                align-items: center;
                gap: 13px;
                h4{
                    color: #616161;
                    font-size: 12px;
                    font-weight: 400;
                    cursor: pointer;
                }
                svg{
                    &:first-child{
                        color: #673AB7;
                    }
                }
            }
        }
        .date-main{
            padding: 10px 16px;
            background-color: white;
            border-radius: 8px;
            width: max-content;
            margin: 11px 0 ;
            margin-left: auto;
            > div{
                gap: 16px;
                display: flex;
                align-items:center;
            }
        }
        .cards-main{
            display: flex;
            align-items: center;
            gap:20px;
            @media (max-width:991px){
                gap:10px;
                flex-wrap: wrap;
            }
            .card{
                border: 1px solid #E3F2FD;
                border-radius: 12px;
                display: flex;
                align-items: center;
                background-color: white;
                width: 25%;
                @media (max-width:991px){
                    width:calc(50% - 5px)
                }
                @media (max-width:540px){
                    width:100%
                }
                &:nth-child(2){
                    .icon{
                        background: #D84315;
                    }
                    .text{
                        div{
                            color: #D84315;
                        }
                    }
                }
                &:nth-child(3){
                    .icon{
                        background: #673AB7;
                    }
                    .text{
                        div{
                            color: #673AB7;
                        }
                    }
                }
                &:nth-child(4){
                    .icon{
                        background: #00C853;
                    }
                    .text{
                        div{
                            color: #00C853;
                        }
                    }
                }
                .icon{
                    background: #2196F3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 90px;
                    height: 83px;
                    border-radius: 12px 0 0 12px;
                }
                .text{
                    height: 100%;
                    padding: 16px;
                    h4{
                        color: #212121;
                        font-weight: 700;
                        font-size: 20px;
                        margin-bottom: 5px;
                    }
                    h6{
                        display: flex;
                        align-items: center;
                        color: #757575;
                        gap: 5px;
                        div{
                            color: #2196F3;
                        }
                    }
                }
            }
        }
        .order-main{
            background: #FFFFFF;
            border-radius: 12px;
            margin-top: 20px;
            padding: 20px;
            h5{
                font-weight: 700;
                font-size: 20px;
                color: #212121;
            }
            p{
                font-weight: 400;
                font-size: 14px;
                color: #757575;
                margin-top: 10px;
            }
            .chart{
                margin-top: 17px;
            }
        }
        .charts-main{
            margin-top: 20px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            .chart1{
                background-color: white;
                border-radius: 12px;
                width: calc(33.33% - 14px);
                .title{
                    padding: 15px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #212121;
                    border-bottom: 1px solid #F5F5F5;
                }
                .chart{
                    padding: 25px 0;
                    &:nth-child(3){
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .apexcharts-legend-marker{
                        border-radius: 10px !important;
                    }
                }
            }
        }
    }
`;

export default DashboardStyle;
