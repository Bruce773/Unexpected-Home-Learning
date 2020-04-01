import React, { useState } from "react";
import {
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardResourceFormat,
  CardPricing,
  ModalContentWrapper,
  ModalCardTitle,
  ModalCardSubtitle,
  ModalCardPricing,
  ModalCardResourceFormat,
  ModalCardCategories,
  LinkBoxWrapper
} from "./elements";
import { _truncate } from "utilities";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

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
  embedlyHtml,
  resourceCategory,
  resourceLink
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
            <div style={{ marginTop: "50px", marginBottom: "40px" }}>
              <div style={{ display: "inline", marginBottom: "20px" }}>
                Format:{" "}
                <ModalCardResourceFormat>
                  {resourceFormat}
                </ModalCardResourceFormat>
                Pricing: <ModalCardPricing>{pricing}</ModalCardPricing>
                Category:{" "}
                <ModalCardCategories>
                  {resourceCategory?.join(" • ")}
                </ModalCardCategories>
              </div>
            </div>
            <ModalCardPricing>Link: </ModalCardPricing>
            <a href={resourceLink} rel="noopener noreferrer" target="_blank">
              <LinkBoxWrapper>
                {embedlyHtml && (
                  <div dangerouslySetInnerHTML={{ __html: embedlyHtml }} />
                )}
              </LinkBoxWrapper>
            </a>
          </Container>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};
