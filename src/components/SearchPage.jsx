import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import WeatherSearch from "./WeatherSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  companieslength: state.companies.company.length,
});

function SearchPage(props) {
  return (
    <Card className="containerborder">
      <div className="position-relative">
        <h1 className="mt-3">Weather App</h1>
        {/* <Link to="/favourites">
          <Button className="favouritecompanybutton">
            Favourite Companies ({props.companieslength})
          </Button>
        </Link> */}
      </div>
      <hr style={{ backgroundColor: "black" }} />
      <Container className="d-flex">
        <WeatherSearch></WeatherSearch>
      </Container>
    </Card>
  );
}

export default connect(mapStateToProps)(SearchPage);
