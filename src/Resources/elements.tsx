import styled from "styled-components";
import { BaseFont, lightTealGreen } from "globalStyles";
import Select from "@material-ui/core/Select";

export const SectionHeader = styled(BaseFont)`
  & {
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const SearchResultsCount = styled(BaseFont)`
  margin: 20px;
  font-size: 1.4rem;
`;

export const StyledSelect = styled(Select)`
  && {
    margin-top: auto;
    font-size: 20px;
    margin-left: 20px;
    color: ${lightTealGreen};
  }
`;
