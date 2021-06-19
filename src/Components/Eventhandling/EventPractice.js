import { useState } from "react";

const EventPractice = () => {
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMsg = (e) => setMsg(e.target.value);

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <input type="text" name="msg" value={msg} onChange={onChangeMsg}></input>
      <p>
        {username}:{msg}
      </p>
    </div>
  );
};

export default EventPractice;
