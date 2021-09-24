import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Col className="App mx-auto" xs={12} md={11} lg={9} xl={7}>
      <Container fluid="true">
        <Router>
          <Switch>
            <Route path="/" exact component={SearchPage} />
          </Switch>
        </Router>
      </Container>
    </Col>
  );
}

export default App;
