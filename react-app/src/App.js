import './App.css';
import Menu from './components/Menu';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import YesScreen from './components/YesScreen';
import NoScreen from './components/NoScreen';
import React, {useState} from "react";
import AudioPlayer from './components/AudioPlayer';
import ScreenTwoPartTwo from './components/ScreenTwoPartTwo';


function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => Math.min(prev + 1, Object.keys(screens).length - 1));
  };

  const screens = {
    0: <Menu incrementCount = {incrementCount} />,
    1: <ScreenTwo count = {count} setCount = {setCount}/>,
    2: <ScreenTwoPartTwo count = {count} setCount = {setCount}/>,
    3: <ScreenThree count = {count} setCount = {setCount} incrementCount={incrementCount}/>,
    4: <YesScreen count = {count} setCount = {setCount}/>,
    5: <NoScreen count = {count} setCount = {setCount}/>,
  };

  return (
    <div>
      {screens[count]}
      <AudioPlayer style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%,-50%)', display: count === 0 ? 'block' : 'none'}}/>
    </div>
  );
}

export default App;

