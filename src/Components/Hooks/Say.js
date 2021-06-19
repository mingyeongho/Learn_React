import { useState } from "react";

const Say = () => {
  const [msg, setMsg] = useState("MSG");
  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMsg("입장");
  };

  const onClickLeave = () => {
    setMsg("퇴장");
  };

  const onClickBlack = () => {
    setColor("black");
  };

  const onClickBlue = () => {
    setColor("blue");
  };

  const onClickRed = () => {
    setColor("red");
  };

  return (
    <div>
      <h1 style={{ color }}>{msg}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <button onClick={onClickBlack}>Black</button>
      <button onClick={onClickBlue}>Blue</button>
      <button onClick={onClickRed}>Red</button>
    </div>
  );
};

export default Say;
