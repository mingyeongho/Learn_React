import { Link, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/router/About";
import HistorySample from "./Components/router/HistorySample";
import Home from "./Components/router/Home";
import Profile from "./Components/router/Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;
