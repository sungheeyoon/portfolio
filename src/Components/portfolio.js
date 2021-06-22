import { Button, Card, Container } from "react-bootstrap";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
`;
const BtnPosition = styled.div`
  position: absolute;
  right: 20px;
  bottom: 99px;
`;
const Portfolio = () => {
  return (
    <>
      <Container>
        <div>
          <h2>Portfolio</h2>
          <p>See My Works - Lorem ipsum dolor</p>
        </div>
        <div>
          <Cards>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  Ywitter{" "}
                  <BtnPosition>
                    <Button
                      variant="outline-info"
                      style={{
                        fontSize: "12px",
                        float: "right",
                      }}
                    >
                      Visit Website
                    </Button>
                  </BtnPosition>
                </Card.Title>
                <Card.Text>Toy project by cloning Twitter</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  Yoonflix
                  <BtnPosition>
                    <Button
                      variant="outline-info"
                      style={{
                        fontSize: "12px",
                        float: "right",
                      }}
                    >
                      Visit Website
                    </Button>
                  </BtnPosition>
                </Card.Title>
                <Card.Text>
                  Provides movie and TV show information using The Movie
                  Database API
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title style={{ postion: "relative" }}>
                  Todo-list
                  <BtnPosition>
                    <Button
                      variant="outline-info"
                      style={{
                        fontSize: "12px",
                        float: "right",
                      }}
                    >
                      Visit Website
                    </Button>
                  </BtnPosition>
                </Card.Title>

                <Card.Text>Todo list using Vanilla Javascript</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  Cuptalk
                  <BtnPosition>
                    <Button
                      variant="outline-info"
                      style={{
                        fontSize: "12px",
                        float: "right",
                      }}
                    >
                      Visit Website
                    </Button>
                  </BtnPosition>
                </Card.Title>
                <Card.Text>
                  Cuptalk theme applied after KakaoTalk clone
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
