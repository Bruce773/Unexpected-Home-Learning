import React from "react";
import { UseSiteData } from "Hooks";
import { LocalContactsCard } from "Components";
import styled from "styled-components";
import { BaseFont, tealGreen } from "globalStyles";

const Header = styled(BaseFont)`
  margin-top: 20px;
  color: ${tealGreen};
  font-size: 2rem;
`;

const Paragraph = styled(BaseFont)`
  font-size: 1.8rem;
  margin: 40px;
`;

export const LocalContactSection: React.FC = () => {
  const { localContacts } = UseSiteData();
  return (
    <>
      {localContacts?.map(({ ...props }) => (
        <LocalContactsCard {...props} />
      ))}
      <LocalContactsCard
        hasBorder
        areaOfExpertise="Click here"
        name="Interested in becoming a Local Contact?"
        data={
          <>
            <Paragraph>
              **We're looking for people willing to teach. Tutors are especially
              welcome! If you tutor math, reading, history, any language (ie.
              Spanish) or teach music, please reach out to us!**
            </Paragraph>
            <Header>Contact Bruce Johnson</Header>
            <Paragraph>Email: bruce@webdevlessons.com</Paragraph>
            <Paragraph>Text: (570) 229-2613</Paragraph>
          </>
        }
      />
    </>
  );
};
