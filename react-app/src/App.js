import './App.css';
import Menu from './components/Menu';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => Math.min(prev + 1, Object.keys(screens).length - 1));
  };

  const screens = {
    0: <Menu incrementCount = {incrementCount} />,
    1: <ScreenTwo count = {count} setCount = {setCount}/>,
    2: <ScreenThree count = {count} setCount = {setCount} incrementCount={incrementCount}/>
  };

  return (
    <div>
      {screens[count]}
    </div>
  );
}

export default App;

