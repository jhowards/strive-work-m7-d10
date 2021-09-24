import React from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  Card,
  CardDeck,
} from "react-bootstrap";
import { useState } from "react";
import { FaTemperatureLow } from "react-icons/fa";

function WeatherSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [cityDetails, setcityDetails] = useState("");
  const [weatherDetails, setweatherDetails] = useState({ daily: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      alert("Please input a location!");
    } else {
      await getCityDetails();
      setisLoading(false);
    }
  };

  const getCityDetails = async () => {
    let lat = null;
    let lon = null;
    setisLoading(true);
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=742beed4c9ab015f770ff7c8033cea08`
      );
      let cityresponse = await response.json();
      if (cityresponse.length === 0) {
        alert("No weather data found in this location!");
      }
      setcityDetails(cityresponse.name);
      lat = cityresponse.coord.lat;
      lon = cityresponse.coord.lon;
      await getForecastDetails(lat, lon);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const getForecastDetails = async (lat, lon) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=742beed4c9ab015f770ff7c8033cea08`
      );
      let weatherresponse = await response.json();
      if (weatherresponse.length === 0) {
        alert("No weather data found in this location!");
      }
      console.log(weatherresponse);
      setweatherDetails(weatherresponse);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <Container className="mt-4 mx-2">
      <Row>
        <Col>
          <Row>
            <Col>
              <Form id="searchQueryForm" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicSearch" className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="e.g. London"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mr-3"
                    size="lg"
                  />
                  <Button type="submit" size="lg" variant="primary">
                    Search
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex">
            {isLoading ? (
              <Spinner
                variant="success"
                animation="border"
                role="status"
                className="mx-auto mt-5"
              ></Spinner>
            ) : (
              <Container fluid="true" className="mx-auto">
                {cityDetails === "" ? (
                  ""
                ) : (
                  <h2 className="mb-2"> {cityDetails} - 7 day Forecast</h2>
                )}

                <CardDeck className="mt-3">
                  {weatherDetails.daily.map((b) => (
                    <Col xs={12} sm={6} lg={3} className="px-1" key={b.dt}>
                      <Card
                        className="m-2 jobCard"
                        style={{
                          border: "3px solid black",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={"/" + b.weather[0].main + ".png"}
                          className="mx-auto"
                        />

                        <Card.Body className="d-flex">
                          <Card.Title
                            className="m-auto"
                            style={{ color: "black", fontSize: "16px" }}
                          >
                            <h4 className="mb-2">
                              {new Date(b.dt * 1000)
                                .toLocaleString("en-GB", {
                                  timeZone: "UTC",
                                })
                                .split(",")[0]
                                .slice(0, 5)}
                            </h4>
                            <h5 className="mb-2">{b.weather[0].main}</h5>
                            <h5 className="mb-1 mt-0">
                              <FaTemperatureLow
                                className="mr-2"
                                size={20}
                                color="red"
                              />
                              {Math.round(b.temp.day)} °C
                            </h5>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </CardDeck>
              </Container>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherSearch;
