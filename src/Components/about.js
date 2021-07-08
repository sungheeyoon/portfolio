import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import imgMe from "../img/me.jpg";

const AboutContainer = styled.div`
  height: 100vh;
  width: 100wh;
  display: flex;
  position: relative;
  margin: 0 10%;
  z-index: -1;
  background-color: #252934;
  color: white;
`;
const AboutContainerC = styled.div`
  height: 100vh;
  width: 100wh;
  display: flex;
  position: relative;
  margin: 0 10%;
  background-color: #252934;
  color: white;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;
const VerticalLine = styled.span`
  border-left: 2px solid white;
  position: absolute;
  height: 30%;
`;

const SmallFont = styled.p`
  font-size: 15px;
`;

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{
        width: "600px",
        height: "200px",
        backgroundColor: "grey",
        borderRadius: "1%",
        marginRight: "9%",
      }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item
        style={{
          width: "600px",
          height: "200px",
        }}
      >
        <Carousel.Caption>
          <h5>2016 - 2018</h5>
          <h5>Bachalor - Konkuk University</h5>
          <p>Computer Science Transfer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          width: "600px",
          height: "200px",
        }}
      >
        <Carousel.Caption>
          <h5>2012 - 2016</h5>
          <h5>Baekseok Arts University</h5>
          <p>Tourism Management</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
const About = () => {
  return (
    <>
      <AboutContainer id="about">
        {/* image insert*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "55%",
          }}
        >
          <h1 style={{ fontSize: "80px", marginBottom: "20px" }}>
            Hello !<br />
          </h1>
          <h3 style={{}}>
            My portfolio represents what I have learned and what I want to do.
            <br />
            <br />I love building websites and getting people's reactions to my
            website. I also made some sketches to flesh out the concept and
            immediately jumped into work.
          </h3>
        </div>
        <img
          src={imgMe}
          style={{
            borderRadius: "50%",
            width: "55%",
            position: "absolute",
            top: "-8%",
            right: "-15%",
          }}
          width="50%"
          height="auto"
          position="fixed"
          alt="testA"
        />
        <VerticalLine style={{ bottom: "0" }} />
      </AboutContainer>

      <AboutContainerC id="about">
        <VerticalLine style={{ top: "-8%" }} />
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            top: "15%",
          }}
        >
          <h2>SKILL</h2>
          <div>
            <div style={{ display: "flex", marginRight: "50%" }}>
              <IconBox>
                <FontAwesomeIcon icon={faHtml5} size={"5x"} color={"white"} />
                <SmallFont>HTML5</SmallFont>
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faCss3Alt} size={"5x"} color={"white"} />
                <SmallFont>CSS3</SmallFont>
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faJs} size={"5x"} color={"white"} />
                <SmallFont>JS + ES6</SmallFont>
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faReact} size={"5x"} color={"white"} />
                <SmallFont>REACT</SmallFont>
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faGitAlt} size={"5x"} color={"white"} />
                <SmallFont>GIT</SmallFont>
              </IconBox>
            </div>
          </div>
        </div>
        <VerticalLine style={{ top: "30%" }} />
        <div
          style={{
            zIndex: "1",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            top: "54%",
          }}
        >
          <h2>EDUCATION</h2>
          <ControlledCarousel />
        </div>
      </AboutContainerC>
    </>
  );
};

export default About;
