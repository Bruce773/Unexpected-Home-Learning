import React from "react";
import styled from "styled-components";
import { BaseFont, tealGreen } from "globalStyles";

const Paragraph = styled(BaseFont)`
  & {
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const HeaderThree = styled(BaseFont)`
  & {
    font-size: 1.8rem;
    color: ${tealGreen};
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const AboutContact: React.FC<{ content?: any[] }> = ({ content }) => {
  const data = content?.map(({ content, nodeType }) => {
    if (nodeType === "paragraph") {
      if (content.length === 1) {
        return <Paragraph>{content[0].value}</Paragraph>;
      } else {
        return (
          <Paragraph>
            {content.map(
              ({
                value,
                marks
              }: {
                value: string;
                marks: { type: string }[];
              }) => {
                const textDecoration = marks && marks[0] && marks[0].type;
                return (
                  <div
                    style={
                      textDecoration === "bold"
                        ? { fontWeight: "bold", display: "inline" }
                        : { textDecoration, display: "inline" }
                    }
                  >
                    {value}
                  </div>
                );
              }
            )}
          </Paragraph>
        );
      }
    } else if (nodeType === "heading-3") {
      if (content.length === 1) {
        return <HeaderThree>{content[0].value}</HeaderThree>;
      }
    } else if (nodeType === "hyperlink") {
      if (content.length === 1) {
        console.log(content);
        return <a href="">{content[0].value}</a>;
      }
    }
  });
  return <>{data}</>;
};
