import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import SendReceiveButton from "./components/SendReceiveButton";
import ReadingIcons from "./components/ReadingIcons";
import axios from "axios";

function App() {
  //set value last statement requested
  const [lastStatementRequested, setlastStatementRequested] = useState("");
  const [updateStatement, setUpdateStatement] = useState(false);

  //ifText setText to true => arrow & send
  const [userStatement, setUserStatement] = useState("");
  useEffect(() => {
    // pull the message from the server first of the list
    //let randomStatement = "API";
    axios.get(`http://localhost:5000/getStatement?id=1`).then((result) => {
      console.log(result);
      setlastStatementRequested(result.data.statement[0].statement);
    });
  }, [updateStatement]);

  // let statement;
  // randomStatement = lastStatementRequested;

  // function sendReceive(params) {
  //   if (statement.current !== lastStatementRequested) {
  //   }
  // }

  return (
    <>
      <div className="h-[100vh] w-[500px] justify-center m-auto flex-col flex align-center [npt-[15vh]">
        <Board lastStatementRequested={lastStatementRequested} />
        <ReadingIcons sendReceive={{}} />
        <SendReceiveButton />
      </div>
    </>
  );
}

export default App;
