import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { SocialInfra } from "./screens/SocialInfra";
import { Summ } from "./screens/Summ";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/social-infra"
          component={SocialInfra}
        />
        <Route
          exact
          path="/summ"
          component={Summ}
        />
      </Switch>
    </Router>
  );
}
export default App;
