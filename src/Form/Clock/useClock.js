import { useEffect, useState } from "react";

export const useClock = (date_format) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return date.toLocaleString(undefined, date_format);
};
