import { useEffect, useState } from "react";
import Weather from "./Weather";

const App = () => {
  // const [data, setData] = useState("");
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     let response = await fetch("https://api.adviceslip.com/advice");
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     let advice = await response.json();

  //     setData(advice);
  //   } catch (error) {
  //     setError("could not fetch data");
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (!data) {
  //   return <h1>loading...</h1>;
  // }

  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <div>
      {/* <h1>Here some advice for you</h1>
      <h2>{data.slip.advice}</h2>
      <button onClick={fetchData}>fetch</button> */}
      <Weather/>
    </div>
  );
};

export default App;
