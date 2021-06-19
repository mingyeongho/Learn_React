import { useEffect, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  useEffect(() => {
    console.log("마운트가 되었습니다.");
  }, []);

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
  }, [name, nickname]);

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => dispatch(e.target)}
        ></input>
        <input
          name="nickname"
          value={nickname}
          onChange={(e) => dispatch(e.target)}
        ></input>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
