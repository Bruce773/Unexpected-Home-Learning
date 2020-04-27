import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { ModalCardTitle, ModalCardSubtitle } from "Components/CardElements";
import Button from "@material-ui/core/Button";
import { tealGreen } from "globalStyles";

export const ContactForm: React.FC = () => (
  <Container maxWidth="md">
    <ModalCardTitle>Contact Us</ModalCardTitle>
    <ModalCardSubtitle>
      Have a suggestion or question? Contact us, here.
    </ModalCardSubtitle>
    <TextField
      style={{ width: "inherit" }}
      name="fullName"
      label="Full Name"
      variant="outlined"
    />
    <TextField
      style={{ width: "inherit", marginTop: "20px" }}
      name="email"
      label="Email Address"
      variant="outlined"
    />
    <TextField
      style={{ width: "inherit", marginTop: "20px" }}
      name="questions"
      label="Questions or suggestions"
      variant="outlined"
      multiline
      rows={4}
    />
    <Button style={{ color: tealGreen }}>Submit</Button>
  </Container>
);
