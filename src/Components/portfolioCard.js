import { Card } from "react-bootstrap";
function PortfolioCard({ img, src, title, text }) {
  return (
    <div>
      <Card style={{ width: "30rem", margin: "40px" }}>
        <a href={src}>
          <Card.Img variant="top" src={img} />
        </a>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PortfolioCard;
