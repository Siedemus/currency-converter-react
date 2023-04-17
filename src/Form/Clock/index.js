import { useEffect, useState } from "react";
import "./style.css";

export const Clock = () => {
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => clearInterval(intervalId)
    }, []);

    return (
        <div className="clock">Dziś jest {date.toLocaleString(undefined, options)}</div>
    )
};