import SendIcon from "@mui/icons-material/Send";

const SendReceiveButton = () => {
  return (
    <>
      <div className="flex align-center justify-center m-10">
        <button className="w-30 rotate-[270deg]" onClick={() => {}}>
          {" "}
          <SendIcon />
        </button>
      </div>
    </>
  );
};

export default SendReceiveButton;
