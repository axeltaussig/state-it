import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import SendReceiveButton from "./components/SendReceiveButton";
import ReadingIcons from "./components/ReadingIcons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] w-[500px] justify-center m-auto flex-col flex align-center [npt-[15vh]">
        <Board />
        <ReadingIcons />
        <SendReceiveButton />
      </div>
    </>
  );
}

export default App;
