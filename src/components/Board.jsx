import ReadingIcons from "./ReadingIcons";
import SendReceiveButton from "./SendReceiveButton";

function BoardReading() {
  return (
    <div className="h-full w-full ring-1 ring-gray-900/5 sm:rounded-lg">
      <textarea
        type="textarea"
        className="w-full h-full p-5 resize-none border-none outline-none bg-transparent focus:bg-white"
      />
    </div>
  );
}

export default BoardReading;
