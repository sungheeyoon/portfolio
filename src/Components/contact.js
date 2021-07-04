import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const ContactContainer = styled.div`
  background-color: #252934;
  color: white;
  padding: 70px;
`;
const ContactBoxs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const ContactBoxTitle = styled.h4`
  padding: 7px;
`;
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <ContactBoxs>
        <ContactBox>
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <ContactBoxTitle>
            <b>Email :</b> torushy@gmail.com
          </ContactBoxTitle>
        </ContactBox>
        <ContactBox>
          <FontAwesomeIcon icon={faPhoneAlt} size="3x" />
          <ContactBoxTitle>
            <b>Phone :</b> 010-4131-2898
          </ContactBoxTitle>
        </ContactBox>
      </ContactBoxs>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://github.com/sungheeyoon"
          target="blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FontAwesomeIcon icon={faGithub} size="5x" />
        </a>
      </div>
    </ContactContainer>
  );
};

export default Contact;
