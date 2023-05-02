import { useEffect, useState } from "react";

export const useRates = () => {
  const [data, setData] = useState({ status: "waiting" });
  const URL =
    "https://api.exchangerate.host/latest?symbols=USD,EUR,PLN,GBP&base=PLN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setData({
          status: "success",
          jsonData,
        });
      } catch {
        setData({
          status: "failed",
        });
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return data;
};
