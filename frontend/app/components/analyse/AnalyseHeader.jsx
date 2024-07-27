'use client'

import { UserAuth } from "../../context/AuthContext";
import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdvanceChart from "../AdvanceChart";
import News from "../News";
// import { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function AnalyseHeader() {
    const { user } = UserAuth();
    const options = [
        "RELIANCE",
        "TCS",
        "HDFCBANK",
        "HINDUNILVR",
        "ICICIBANK",
        "INFY",
        "KOTAKBANK",
        "BHARTIARTL",
        "LT",
        "WIPRO",
        "MARUTI",
        "BAJAJFINSV",
        "BAJFINANCE",
        "AXISBANK",
        "HCLTECH",
        "ASIANPAINT",
        "TECHM",
        "NESTLEIND",
        "ULTRACEMCO",
        "TITAN",
        "BAJAJ-AUTO",
        "SUNPHARMA",
        "DRREDDY",
        "JSWSTEEL",
        "INDUSINDBK",
        "IOC",
        "BAJAJHLDNG",
        "SBILIFE",
        "DIVISLAB",
        "POWERGRID",
        "HDFC",
        "UPL",
        "ADANIPORTS",
        "M&M",
        "GRASIM",
        "HEROMOTOCO",
        "BRITANNIA",
        "SHREECEM",
        "COALINDIA",
        "ICICIGI",
        "HINDALCO",
        "CIPLA",
        "TATAMOTORS",
        "ONGC",
        "NTPC",
        "NTPC",
        "BPCL",
        "LTTS",
        "WIPRO"
    ]
    const [selectedvalue, setSelectedValue] = useState("");
    const [stock, setStock] = useState("NASDAQ:AAPL");
    // const [APIData, setAPIData] = useState([]);
    const handleOnChange = (value) => {
        setSelectedValue(value);
    }
    // const fetchData = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://alpha-vantage.p.rapidapi.com/query',
    //         params: {
    //             function: 'TIME_SERIES_DAILY',
    //             symbol: `${selectedvalue.toUpperCase()}.BSE`,
    //             outputsize: 'compact',
    //             datatype: 'json'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': '6f0262d62bmshcb3569f4179ff75p12779bjsn0be5a662ef17',
    //             'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         setAPIData(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <div className="min-h-screen">
            <header className="w-11/12 mx-auto flex justify-between mt-4 items-center">
                <h2 className="text-white text-xl">Welcome Back, {(user) ? user.displayName : "Guest"}</h2>
                <div className="bg-[#1D1D41] flex justify-between w-8/12 p-2 rounded-2xl items-center">
                    <input id="Search" value={selectedvalue} onChange={(e) => { handleOnChange(e.target.value) }} className="bg-[#1D1D41] text-white w-11/12 p-2 rounded-lg focus-visible:border-1 focus-visible:border-white focus-visible:outline-0" placeholder="Choose your stock" />
                    <p onClick={() => { setStock(selectedvalue); }} className="text-white text-xl cursor-pointer"><FaSearch /></p>
                </div>
            </header>
            {/* <App prop={APIData} /> */}
            <div className="w-11/12 mx-auto flex flex-wrap mt-[25px] mb-[50px]">
                <div className="w-full">
                    <h2 className="text-white text-xl my-[20px]">Stock Specific Chart</h2>
                    <div className="w-full h-[400px] min-w-[300px] min-h-[400px]">
                        <AdvanceChart stock={stock} />
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-white text-xl my-[20px]">Top News</h2>
                    <div className="w-full h-[400px] min-w-[300px] min-h-[400px]">
                        <News />
                    </div>
                </div>
            </div>
        </div>
    )
}

// class App extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         data: props.prop,
//     //     }
//     // }
//     // componentDidUpdate(prevProps) {
//     //     if (prevProps.prop !== this.props.prop) {
//     //         this.setState({ data: this.props.prop });
//     //     }
//     // }

//     render() {
//         // const chartdata = this.state.data["Time Series (Daily)"];
//         // let newdata = [];

//         // for (let key in chartdata) {
//         //     let date = new Date(key);
//         //     let open = chartdata[key]["1. open"];
//         //     let high = chartdata[key]["2. high"];
//         //     let low = chartdata[key]["3. low"];
//         //     let close = chartdata[key]["4. close"];
//         //     let val = { x: date, y: [open, high, low, close] }
//         //     newdata.push(val);
//         // }

//         const options = {
//             theme: "dark1", // "light1", "light2", "dark1", "dark2"
//             animationEnabled: true,
//             exportEnabled: true,
//             title: {
//                 // text: `${this.state.data["Meta Data"] ? this.state.data["Meta Data"]["2. Symbol"] : ""} Stock Price -  2024`
//                 text: `Reliance BSE Stock Price -  2024`
//             },
//             axisX: {
//                 valueFormatString: "DD-MMM"
//             },
//             axisY: {
//                 prefix: "₹",
//                 title: "Price (in INR)"
//             },
//             data: [{
//                 type: "candlestick",
//                 showInLegend: true,
//                 name: "RELIANCE BSE",
//                 yValueFormatString: "$###0.00",
//                 xValueFormatString: "MMMM YY",
//                 dataPoints:
//                     // newdata
//                     [
//                         { x: new Date("2024-03-15"), y: [2854.95, 2866.45, 2826.9, 2837.25] },
//                         { x: new Date("2024-03-14"), y: [2865, 2897.35, 2851, 2865.25] },
//                         { x: new Date("2024-03-13"), y: [2955.45, 2965.95, 2855.85, 2864.7] },
//                         { x: new Date("2024-03-12"), y: [2932, 2976.3, 2932, 2950.2] },
//                         { x: new Date("2024-03-11"), y: [2984.7, 2984.7, 2927.35, 2931.2] },
//                         { x: new Date("2024-03-07"), y: [3002.15, 3005.9, 2951.25, 2958.1] },
//                         { x: new Date("2024-03-06"), y: [2989.45, 3019, 2957, 3005.95] },
//                         { x: new Date("2024-03-05"), y: [3011.7, 3011.7, 2973, 2998.3] },
//                         { x: new Date("2024-03-04"), y: [2981, 3024.8, 2975.05, 3011.6] },
//                         { x: new Date("2024-03-03"), y: [2916.7, 2999, 2916.7, 2986] }
//                     ]

//             }
//             ]
//         }
//         return (
//             <div>
//                 < CanvasJSChart options={options}
//                     onRef={ref => this.chart = ref}
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div >
//         );
//     }
// }