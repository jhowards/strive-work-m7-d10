import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Container className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
