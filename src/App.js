import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Links } from "./screens/Links";
import { FutureOfCommunity } from "./screens/FutureOfCommunity";
import { Images } from "./screens/Images";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/links" component={Links} />
        <Route
          exact
          path="/future-of-community"
          component={FutureOfCommunity}
        />
        <Route exact path="/images" component={Images} />
      </Switch>
    </Router>
  );
}
export default App;
