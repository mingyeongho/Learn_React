import { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Categories from "./Components/News/Categories";
import NewsList from "./Components/News/NewsList";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
