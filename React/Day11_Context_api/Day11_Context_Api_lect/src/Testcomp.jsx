import React from "react";
import Comp1 from "./Components/Comp1";

const Testcomp = ({value}) => {
  // const [data, setData] = useState("data from test caese")
  console.log(value)
  return (
    <div>
      <h1>all component {value}</h1>
      <Comp1/>
    </div>
  );
};

export default Testcomp;
