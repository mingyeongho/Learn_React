import { useMemo, useState } from "react";

const Average = () => {
  const [lists, setLists] = useState([]);
  const [num, setNum] = useState("");

  const AddNum = () => {
    setLists(lists.concat(parseInt(num)));
    setNum("");
  };

  const avg = useMemo(
    () =>
      lists.length === 0
        ? 0
        : lists.reduce((acc, cur) => acc + cur) / lists.length,
    [lists]
  );

  return (
    <div>
      <input value={num} onChange={(e) => setNum(e.target.value)}></input>
      <button onClick={AddNum}>SAVE</button>
      <ul>
        {lists.map((cur, idx) => (
          <li key={idx}>{cur}</li>
        ))}
      </ul>
      <p>평균값: </p>{" "}
      {/* {lists.length === 0
        ? 0
        : lists.reduce((acc, cur) => acc + cur) / lists.length} */}
      {/* list가 바뀌었을 때만 렌더링되면 좋겠음. 지금은 num이 바뀌어도 렌더링됨 */}
      {avg}
    </div>
  );
};

export default Average;
