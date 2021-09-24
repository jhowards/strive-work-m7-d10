import React from "react";
import { ListGroup, Card } from "react-bootstrap";

const WeatherDetails = ({ weather }) => {
  console.log(weather);
  return (
    <Card className="containerborder">
      <div className="position-relative">
        <h1 className="mt-3">Jobs Search Engine</h1>
        {/* <Link to="/search">
          <Button className="backbutton">Back</Button>
        </Link> */}
      </div>
      <hr style={{ backgroundColor: "black" }} />
      <div style={{ height: "25px" }}></div>

      <h4 className="mt-5 mb-3">Jobs Available:</h4>
      <ListGroup>
        {/* <ListGroup.Item>{weather.name}</ListGroup.Item>
      <ListGroup.Item>
        Wind: {weather.wind.deg} {weather.wind.speed}
      </ListGroup.Item> */}
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WeatherDetails;
