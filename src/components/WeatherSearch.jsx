import React from "react";
import SingleJob from "./SingleJob";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

function WeatherSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [jobsArray, setJobsArray] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      alert("Please input a location!");
    } else {
      await getArray();
      setisLoading(false);
    }
  };

  const getArray = async () => {
    setisLoading(true);
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=742beed4c9ab015f770ff7c8033cea08`
      );
      let jobsresponse = await response.json();
      console.log(jobsresponse);
      if (jobsresponse.length === 0) {
        alert("No weather data found in this location!");
      }
      setJobsArray(jobsresponse);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <Container className="mt-4">
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
              ""
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherSearch;
