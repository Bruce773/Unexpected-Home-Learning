import React from "react";
import styled from "styled-components";
import { BaseFont, tealGreen } from "globalStyles";
import { LocalContactsCard } from "Components";

const Text = styled(BaseFont)`
  & {
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const LinkText = styled(BaseFont)`
  & {
    font-size: 2.2rem;
    color: ${tealGreen};
  }
`;

export const ParentToParent: React.FC = () => {
  const data = [
    {
      name: `WCPA Homeschool Group`,
      data: (
        <>
          <Text>
            The owner of this group, Jeanne Arnold, has given us permission to
            share this Facebook group with anyone who needs help!
          </Text>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/WCPAHomeschoolGroup/"
          >
            <LinkText>Facebook Group</LinkText>
          </a>
          <Text>
            Don't hesitate to reach out with any questions you might have!
          </Text>
        </>
      ),
      areaOfExpertise: "Facebook Group",
    },
    {
      name: `The Learning Space`,
      data: (
        <>
          <Text>
            A public page where people share learning resources, live
            educational videos, and educational pictures.
          </Text>
          <a
            href="https://www.facebook.com/groups/1188660548132103/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkText>Facebook Group</LinkText>
          </a>
          <Text>
            Feel free to post your own resources or simply interact with others.
          </Text>
        </>
      ),
      areaOfExpertise: "Facebook Group",
    },
    {
      name: `NEPA Homeschool Teens`,
      data: (
        <>
          <Text>
            A page built to support parents of teens. People share learning
            resources and advice.
          </Text>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/groups/1267574810027621/"
          >
            <LinkText>Facebook Group</LinkText>
          </a>
          <Text>
            Feel free to ask any questions you may have and post your own
            resources!
          </Text>
        </>
      ),
      areaOfExpertise: "Facebook Group",
    },
    {
      name: `Special Needs Group: PMLB`,
      data: (
        <>
          <Text>
            A page to help children with special needs. Find resources and like
            minded homeschooling parents.
          </Text>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/groups/poconomountainslittlebear/"
          >
            <LinkText>Facebook Group</LinkText>
          </a>
          <Text>
            Feel free to post your own resources or simply interact with others.
          </Text>
        </>
      ),
      areaOfExpertise: "Facebook Group",
    },
  ];
  return (
    <>
      {data.map(({ ...props }) => (
        <LocalContactsCard {...props} />
      ))}
    </>
  );
};
