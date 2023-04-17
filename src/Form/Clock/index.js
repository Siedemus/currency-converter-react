import { useEffect, useState } from "react";
import "./style.css";

const DATE_FORMAT_OPTIONS = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};

const formatDate = (date) => {
    return (
        date.toLocaleString(undefined, DATE_FORMAT_OPTIONS)
    )
};

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => clearInterval(intervalId)
    }, []);

    return (
        <div className="clock">Dziś jest {formatDate(date)}</div>
    );
};