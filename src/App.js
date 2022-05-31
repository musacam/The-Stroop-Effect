import "./App.css";
import { Button } from "@chakra-ui/react";
import { colors } from "./colors";
import { useEffect, useState } from "react";

function App() {
  const [points, setPoints] = useState(0);

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    document.getElementById("stroop").style.color = randomColor.color;
  });

  const chosenColor = (e) => {
    if (randomColor.color === e.target.textContent) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-zinc-500">
      <div className="absolute top-10 left-10 text-2xl font-bold">
        Points: {points}
      </div>
      <div id="stroop" className="text-4xl font-bold">
        {randomColor.text}
      </div>
      <div className="grid grid-cols-2 justify-evenly items-center w-1/3 h-1/2 gap-x-12">
        <Button
          colorScheme="blackAlpha"
          style={{ fontSize: "150%" }}
          onClick={chosenColor}
        >
          {randomColor.optionOne}
        </Button>
        <Button
          colorScheme="blackAlpha"
          style={{ fontSize: "150%" }}
          onClick={chosenColor}
        >
          {randomColor.optionTwo}
        </Button>
        <Button
          colorScheme="blackAlpha"
          style={{ fontSize: "150%" }}
          onClick={chosenColor}
        >
          {randomColor.optionThree}
        </Button>
        <Button
          colorScheme="blackAlpha"
          style={{ fontSize: "150%" }}
          onClick={chosenColor}
        >
          {randomColor.optionFour}
        </Button>
      </div>
    </div>
  );
}

export default App;
