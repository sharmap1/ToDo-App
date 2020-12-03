import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DayQuote = () => {
  const [quote, setQuote] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.kanye.rest?format=text");
      // console.log(result.data);
      setQuote(`${result.data}`);
      // console.log("result", result);
    };

    fetchData();
  }, [fetching]);

  return (
    <>
      <Col md={{ span: 3, offset: 0 }}>
        <Card.Body className="quote-card">
          <Card.Header as="h5">My Quotes</Card.Header>
          <Card.Img
            variant="top"
            src="https://avatarfiles.alphacoders.com/126/126672.jpg"
          />

          <p>
            {quote}
          </p>
          {/* </Card.Header> */}
          <button
            onClick={() => setFetching(!fetching)}
            className="btn btn-info"
          >
            next
          </button>
        </Card.Body>
      </Col>
    </>
  );
};
export default DayQuote;
