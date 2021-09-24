import React from "react";
import { Container, Card } from "react-bootstrap";
import WeatherSearch from "./WeatherSearch";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  companieslength: state.companies.company.length,
});

function SearchPage() {
  return (
    <Card className="containerborder">
      <div className="position-relative">
        <h1 className="mt-3 mb-0">
          <img
            src="/weather.png"
            className="weatherlogo mb-0 mr-2"
            alt="weather icon"
          />
          Weather App
        </h1>
      </div>
      <hr style={{ backgroundColor: "black" }} />
      <Container className="d-flex">
        <WeatherSearch></WeatherSearch>
      </Container>
    </Card>
  );
}

export default connect(mapStateToProps)(SearchPage);
