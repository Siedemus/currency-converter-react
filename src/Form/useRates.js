import { useEffect, useState } from "react";

export const useRates = () => {
  const [data, setData] = useState({ status: "waiting" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?symbols=USD,EUR,PLN,GBP"
        );
        const jsonData = await response.json();
        setData({
          status: "success",
          data: jsonData,
        });
      } catch {
        setData({
          status: "failed",
        });
      }
    };

    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return data;
};
