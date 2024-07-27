
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function Calender() {
    const chartcontainer = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
            "colorTheme": "dark",
            "isTransparent": false,
            "locale": "en",
            "importanceFilter": "-1,0,1",
            "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu"
        }`;
            chartcontainer.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-calender-widget-container" ref={chartcontainer} style={{ height: "100%", width: "100%" }}>
            {/* <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div> */}
            {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
        </div>
    );
}

export default Calender;
