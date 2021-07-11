import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const ContactContainer = styled.div`
  height: 85vh;
  width: 100wh;

  color: white;
  padding: 70px;
  margin: 5% 10%;
`;

const ContactBoxs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "55%",
          marginTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "80px", marginBottom: "40px" }}>Thank you</h1>
        <h3>if you're interest about me or my projects,</h3>
        <h3 style={{ marginBottom: "100px" }}>
          Feel free to contact me with the informaion below.
        </h3>
        <ContactBoxs>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h3 style={{ marginLeft: "16px" }}>torushy@gmail.com</h3>
        </ContactBoxs>
        <ContactBoxs>
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
          <h3 style={{ marginLeft: "16px" }}>010-4131-2898</h3>
        </ContactBoxs>
        <ContactBoxs>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h3 style={{ marginLeft: "16px" }}>https://github.com/sungheeyoon</h3>
        </ContactBoxs>
      </div>
    </ContactContainer>
  );
};

export default Contact;
