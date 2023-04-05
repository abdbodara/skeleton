import React, { useEffect, useState } from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { geoAlbersUsa } from "d3-geo";
import data from '../../dashboardData.json';

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const WorldMap = () => {
    const [content, setTooltipContent] = useState("");
    const [countryOrders,setCountryOrders] = useState()

    const handleCountryOrder = () => {
        const orderData = data.orders.filter((item)=> item?.country === content)
        setCountryOrders(orderData?.length)
    }


    useEffect(()=> {
        handleCountryOrder()
    },[content])

    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
        const highlightedCountries = ["United States", "Canada", "Mexico", "Brazil", "Argentina"];
    return (<>

        <Tooltip id={content}>{countryOrders}</Tooltip>
        <div>
            <ComposableMap>
                {/* <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            const isHighlighted = geo.properties.name === "United States";
                            <>
                            
                            <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        data-tooltip-id={geo.properties.name}
                        onMouseEnter={() => {
                            setTooltipContent(geo.properties.name);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        style={{
                            default: {
                                fill: isHighlighted ? "#7d8ff8" : "#ECEFF1",
                                stroke: "#ECEFF1",
                                strokeWidth: 0.75,
                                outline: "none",
                            },
                            hover: {
                                fill: isHighlighted ? "#7d8ff8" : "#BEE3F8",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                            },
                            pressed: {
                                fill: isHighlighted ? "#2362f6" : "#607D8B",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                            },
                        }}
                    />
                            />
                        </>
                        ))
                    }
                </Geographies> */}
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted = highlightedCountries.includes(geo.properties.name); // replace "United States" with the name of the country you want to highlight
                            return (
                                <>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        data-tooltip-id={geo.properties.name}
                                        onMouseEnter={() => {
                                            setTooltipContent(geo.properties.name);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            default: {
                                                fill: isHighlighted ? "#7d8ff8" : "#ECEFF1",
                                                stroke: "none",
                                                strokeWidth: 0,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: isHighlighted ? "#7d8ff8" : "#7d8ff8",
                                                stroke: "none",
                                                strokeWidth: 0,
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: isHighlighted ? "#2362f6" : "#607D8B",
                                                stroke: "none",
                                                strokeWidth: 0,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                </>
                            );
                        })
                    }
                </Geographies>

            </ComposableMap>
        </div>
    </>
    )
}

export default WorldMap