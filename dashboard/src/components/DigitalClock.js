import { useState } from "react";

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="widget--clock__digital">
            <h1>{currentTime}</h1>
        </div>
    );
};

export default DigitalClock;