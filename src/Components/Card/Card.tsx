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
} from "Components/CardElements";
import { _truncate } from "utilities";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  title?: string;
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
  const paddingLeft = useMediaQuery("(min-width:600px)");

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
        <ModalContentWrapper paddingLeft={paddingLeft}>
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
            {resourceLink ? (
              <>
                <ModalCardPricing>Link: </ModalCardPricing>
                <a
                  href={resourceLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkBoxWrapper>
                    {embedlyHtml && (
                      <div dangerouslySetInnerHTML={{ __html: embedlyHtml }} />
                    )}
                  </LinkBoxWrapper>
                </a>
              </>
            ) : (
              <>
                <ModalCardSubtitle>
                  Find this resource by Googling:{" "}
                  <ModalCardTitle>{title}</ModalCardTitle>
                </ModalCardSubtitle>
              </>
            )}
          </Container>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};
