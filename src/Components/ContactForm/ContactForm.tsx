import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { ModalCardTitle, ModalCardSubtitle } from "Components/CardElements";
import Button from "@material-ui/core/Button";
import { tealGreen } from "globalStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const Error = styled.div`
  font-size: 15px;
  color: red;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState({ code: 200, message: "" });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("You must enter an email address"),
    full_name: Yup.string().required("You must enter your name"),
    questions: Yup.string().required("You must enter a question or suggestion"),
  });

  const {
    handleChange,
    handleBlur,
    values: { full_name, email, questions },
    errors,
    touched,
  } = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      questions: "",
    },
    validationSchema,
    onSubmit: () => undefined,
  });

  const submitQuestion = () => {
    axios
      .post("https://formspree.io/xnqgapjn", {
        full_name,
        email,
        questions,
      })
      .then(({ status }) => {
        if (status.toString().includes("200"))
          setStatus({
            code: 200,
            message:
              "Your message was sent! You should hear back from us within 2-3 business days. :)",
          });
        console.log(status);
        // resetFormFields();
      })
      .catch(error => {
        if (`${error}`.includes("400"))
          setStatus({
            code: 404,
            message: "Error please try again in a little bit!",
          });
        console.log(error);
      });
  };

  return (
    <Container maxWidth="md">
      <ModalCardTitle>Contact Us</ModalCardTitle>
      <ModalCardSubtitle>
        Have a question or suggestion? Contact us, here.
      </ModalCardSubtitle>
      <TextField
        onBlur={handleBlur}
        style={{ width: "inherit" }}
        onChange={handleChange}
        value={full_name}
        name="full_name"
        label="Full Name"
        variant="outlined"
      />
      {errors.full_name && touched.full_name && (
        <Error>{errors.full_name}</Error>
      )}
      <TextField
        onBlur={handleBlur}
        style={{ width: "inherit", marginTop: "20px" }}
        name="email"
        id="email"
        onChange={handleChange}
        value={email}
        label="Email Address"
        variant="outlined"
      />
      {errors.email && touched.email && <Error>{errors.email}</Error>}
      <TextField
        onBlur={handleBlur}
        style={{ width: "inherit", marginTop: "20px" }}
        name="questions"
        onChange={handleChange}
        value={questions}
        label="Questions or suggestions"
        variant="outlined"
        multiline
        rows={4}
      />
      {errors.questions && touched.questions && (
        <Error>{errors.questions}</Error>
      )}
      <Button
        size="large"
        variant="outlined"
        onClick={() => {
          console.log(errors);
          (!errors.email || !errors.full_name || !errors.questions) &&
            submitQuestion();
        }}
        style={{ color: tealGreen, marginTop: "20px" }}
      >
        Submit
      </Button>
      {status.code === 404 ? (
        <Error>{status.message}</Error>
      ) : (
        <div style={{ fontSize: "22px", marginTop: "20px", color: "green" }}>
          {status.message}
        </div>
      )}
    </Container>
  );
};
