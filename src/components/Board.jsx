import { useEffect, useState } from "react";

function Board(props) {
  let currentStatment = props.lastStatementRequested;

  return (
    <div className="h-full w-full ring-1 ring-gray-900/5 sm:rounded-lg">
      <textarea
        type="textarea"
        value={currentStatment}
        onChange={() => {}}
        className="w-full h-full p-5 resize-none border-none outline-none bg-transparent focus:bg-white"
      />
    </div>
  );
}

export default Board;
