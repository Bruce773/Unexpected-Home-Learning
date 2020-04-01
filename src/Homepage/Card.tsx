import React, { useState } from "react";
import {
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardResourceFormat,
  CardPricing,
  ModalContentWrapper,
  ModalCardTitle,
  ModalCardSubtitle
} from "./elements";
import { _truncate } from "utilities";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";

interface Props {
  title: string;
  resourceLink?: string;
  resourceCategory?: string[];
  resourceFormat?: string;
  subtitle?: string;
  pricing?: string;
  embedlyHtml?: string;
}

export const Card: React.FC<Props> = ({
  title,
  subtitle,
  resourceFormat,
  pricing,
  embedlyHtml
}) => {
  const truncatedSubtitle = _truncate(subtitle, 60);
  const truncatedTitle = _truncate(title, 25);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <CardWrapper onClick={() => setModalIsOpen(true)}>
        <CardTitle>{truncatedTitle}</CardTitle>
        {subtitle && <CardSubtitle>{truncatedSubtitle}</CardSubtitle>}
        {resourceFormat && (
          <CardResourceFormat>{resourceFormat}</CardResourceFormat>
        )}
        {pricing && <CardPricing>{pricing}</CardPricing>}
      </CardWrapper>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalContentWrapper>
          <Container maxWidth="md">
            <ModalCardTitle>{title}</ModalCardTitle>
            <ModalCardSubtitle>{subtitle}</ModalCardSubtitle>
            {embedlyHtml && (
              <div dangerouslySetInnerHTML={{ __html: embedlyHtml }} />
            )}
          </Container>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};
