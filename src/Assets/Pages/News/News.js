import React from "react";
import { NewsData } from "../../Data/Newsdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./News.css";
export default function News() {
  return (
    <div className="m-auto p-auto text-center bg-dark">
      <h3 className="text-white pt-3">Covid-19 Breaking News</h3>
      <div className="row">
        {NewsData.map((news) => {
          return (
            <div className="p-5 col">
              <Card
                style={{ width: "40rem" }}
                className="border border-dark rounded newscard"
              >
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
    </div>
  );
}
