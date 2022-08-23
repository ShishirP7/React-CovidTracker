import React from "react";
import { NewsData } from "../../Data/Newsdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function News() {
  return (
    <div className="m-auto p-auto text-center">
      <h3>Covid-19 Breaking News</h3>
      {NewsData.map((news) => {
        return (
          <div className="p-5">
            <Card style={{ width: "40rem" }} className="border border-success rounded">
              <Card.Img src={news.image} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.news}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
