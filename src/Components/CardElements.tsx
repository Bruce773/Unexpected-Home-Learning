import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { BaseFont, tealGreen } from "globalStyles";
import Grid from "@material-ui/core/Grid";

export const CardWrapper = styled(Paper)<{ hasBorder?: boolean }>`
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  min-height: 120px;
  max-height: 180px;
  ${({ hasBorder }) => hasBorder && `border: solid ${tealGreen} 2px;`}
  cursor: pointer;
`;

export const CardTitle = styled(BaseFont)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 4px;
  text-align: left;
`;

export const CardSubtitle = styled(BaseFont)`
  color: #575757;
  font-size: 1rem;
  text-align: left;
  height: 40px;
`;

export const CardResourceFormat = styled(BaseFont)`
  text-align: left;
  color: ${tealGreen};
  font-weight: bold;
  margin-top: 16px;
  position: absolute;
`;

export const CardPricing = styled(BaseFont)`
  margin-top: 16px;
  text-align: end;
  letter-spacing: 0.07em;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ModalContentWrapper = styled.div<{ paddingLeft: boolean }>`
  text-align: center;
  background-color: white;
  min-width: 65%;
  height: 80vh;
  position: absolute;
  margin: auto;
  border-radius: 6px;
  top: 10%;
  ${({ paddingLeft }) => paddingLeft && "left: 19%;"}
  overflow: scroll;
`;

export const ModalCardTitle = styled(CardTitle)`
  & {
    text-align: center;
    font-size: 2rem;
    margin-top: 20px;
  }
`;

export const ModalCardSubtitle = styled(CardSubtitle)`
  & {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 1.4rem;
    overflow-wrap: break-word;
    height: auto;
  }
`;

export const ModalCardPricing = styled(CardPricing)`
  & {
    display: inline;
  }
`;

export const ModalCardResourceFormat = styled(CardResourceFormat)`
  & {
    display: inline;
    position: relative;
  }
`;

export const StyledGridContainer = styled(Grid)`
  max-width: 600px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ModalCardCategories = styled(BaseFont)`
  display: inline;
  color: #00000094;
  font-weight: bold;
  letter-spacing: 1.3px;
`;

export const LinkBoxWrapper = styled(Paper)`
  width: fit-content;
  padding: 20px;
  margin: auto;
  margin-bottom: 30px;
`;

export const CardLocalContactFormat = styled(CardResourceFormat)`
  & {
    font-size: 1.4rem;
    text-align: center;
    position: relative;
  }
`;
