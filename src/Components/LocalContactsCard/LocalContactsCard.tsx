import React, { useState } from "react";
import {
  CardWrapper,
  ModalContentWrapper,
  ModalCardTitle,
  CardLocalContactFormat
} from "Components/CardElements";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import { AboutContact } from "./AboutContact";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  name?: string;
  content?: any[];
  areaOfExpertise?: string;
}

export const LocalContactsCard: React.FC<Props> = ({
  name,
  content,
  areaOfExpertise
}) => {
  const paddingLeft = useMediaQuery("(min-width:600px)");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <CardWrapper onClick={() => setModalIsOpen(true)}>
        <ModalCardTitle>{name}</ModalCardTitle>
        <CardLocalContactFormat>{areaOfExpertise}</CardLocalContactFormat>
      </CardWrapper>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalContentWrapper paddingLeft={paddingLeft}>
          <Container maxWidth="md">
            <ModalCardTitle>{name}</ModalCardTitle>
            <AboutContact content={content} />
          </Container>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};
