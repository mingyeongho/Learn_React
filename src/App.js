import React from "react";
import { useState } from "react";
import "./App.css";
import loadable from "@loadable/component";

// React.lazy: 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수
// const SplitMe = React.lazy(() => import("./Components/CodeSpliting/SplitMe"));

const SplitMe = loadable(() => import("./Components/CodeSpliting/SplitMe"), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visiable, setVisiable] = useState(false);
  const onClick = () => {
    setVisiable(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div>
      <header>
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React
        </p>
        {visiable && <SplitMe />}
      </header>
    </div>
  );
};

export default App;
