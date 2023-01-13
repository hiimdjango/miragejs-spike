import "./App.css";
import { server } from "./mock-server";
import { Button, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  server();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => axios.get("/api/reminders");

  console.log(data);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data.reminders);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Spin />
      </div>
    );
  }

  return (
    <div className="App">
      <Button onClick={getData}>Don't click me</Button>
      {data.map((d) => (
        <div key={d}>{d}</div>
      ))}
    </div>
  );
}

export default App;
