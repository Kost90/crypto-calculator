import { useEffect, useState } from "react";

const useSocket = () => {
  const [data, setData] = useState(0);


  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/ethusdt@aggTrade"
    );

    ws.onopen = () => {
      console.log("Connected to server");
    };
    ws.onmessage = (event) => {
      const tradeData = JSON.parse(event.data.toString());
      const price = parseFloat(tradeData.p);
      setData(price);
    };
    return () => {
      ws.close();
    };
  }, []);

  return {data};
};

export default useSocket;
