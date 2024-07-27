// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function AdvanceChart(stock = "NASDAQ:AAPL") {
    let chartcontainer = useRef();
    useEffect(
        () => {
            console.log(chartcontainer.current.children);
            if (chartcontainer.current.children.length != 0) {
                chartcontainer.current.removeChild(chartcontainer.current.children[0]);
                for (let i = 0; i < chartcontainer.current.children.length; i++) {
                    chartcontainer.current.removeChild(chartcontainer.current.children[i]);
                }
            }
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${stock.stock}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
            chartcontainer.current.appendChild(script);
        },
        [stock]
    );

    return (
        <div className="tradingview-widget-container" ref={chartcontainer} style={{ height: "100%", width: "100%" }}>
            {/* <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div> */}
            {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
        </div>
    );
}

export default AdvanceChart;
