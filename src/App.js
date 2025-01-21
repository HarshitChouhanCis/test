import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import myfunction from "./My";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let result = await fetch("http://jsonplaceholder.typicode.com/users");
    let response = await result.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
        <h1>List Item OF API</h1>
        <ul>
        {
          data.map((item,index)=>
            <li key={index} role="listitem">{item.name}</li>
          )
        }
        </ul>
    </div>
  );
}

export default App;
