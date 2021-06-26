import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faGraduationCap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const AboutContainer = styled.div`
  padding: 130px 0;
`;
const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div style={{ height: "200px", backgroundColor: "grey" }}></div>
        <Carousel.Caption>
          <h5>2016 - 2018</h5>
          <h5>Bachalor - Konkuk University</h5>
          <p>Computer Science Transfer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ height: "200px", backgroundColor: "grey" }}></div>
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
    <AboutContainer>
      <AboutTitle>
        <h2>About Me</h2>
        <p>Professional Profile - There Is All About Me</p>
      </AboutTitle>
      {/* image insert*/}
      <div>
        <h3>I'm Jack</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          assumenda, voluptas nostrum quasi eaque modi voluptatibus sed enim
          rem? Itaque veritatis eligendi, magnam doloremque vitae temporibus
          quae error odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          assumenda, voluptas nostrum quasi eaque modi voluptatibus sed enim
          rem? Itaque veritatis eligendi, magnam doloremque vitae temporibus
          quae error odit.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="search" />
            <b>Addres :</b> Inchoen,Korea
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} className="search" />
            <b>Phone :</b> 010-4131-2898
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} className="search" />
            <b>Date of birth :</b> 17 november 1992
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="search" />
            <b>Email :</b> torushy@gmail.com
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faGraduationCap} className="search" />
            EDUCATION
          </h3>

          <ControlledCarousel />
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faStar} className="search" />
            MY SKILLS
          </h3>

          <FontAwesomeIcon icon={faHtml5} size={"5x"} color={"grey"} />
          <FontAwesomeIcon icon={faCss3Alt} size={"5x"} color={"grey"} />
          <FontAwesomeIcon icon={faJs} size={"5x"} color={"grey"} />
          <FontAwesomeIcon icon={faReact} size={"5x"} color={"grey"} />
          <FontAwesomeIcon icon={faGitAlt} size={"5x"} color={"grey"} />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
