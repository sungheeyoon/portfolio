import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.div`
  padding: 130px 0;
  background-color: grey;
`;
const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
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
    </AboutContainer>
  );
};

export default About;
