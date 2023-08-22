import { useState } from "react";
import Card from "./components/card";
import Input from "./components/input";
import Reverscard from "./components/Reverscard";
import "./App.css"

const App = () => {
  const [cardinp, setCardinp] = useState({
    cardName: "",
    cardNumber: "",
    data: "",
    cvc: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCardinp((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  const cvc = cardinp.cvc;
  console.log(cvc);
  return (
    <div className="app">
      <div className="left">
        <Card cardinp={cardinp} />
        <Reverscard cvc={cvc} />
      </div>
      <Input handleChange={onChange} />
    </div>
  );
};

export default App;
