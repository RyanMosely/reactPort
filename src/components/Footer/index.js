import React from "react";

import "./style.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  Modal
} from 'react-bootstrap';


const footerStyle = {
  backgroundColor: "#f8f9fa",
  fontSize: "20px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};


function Footer (props) {
  return <div>
  <div style={phantomStyle} />
  <div style={footerStyle}>
<div>

Web Developer & Designer

</div>


  </div>
</div>
}

export default Footer;
