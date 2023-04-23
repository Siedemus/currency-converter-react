import { StyledContainer, StyledResult } from "./styled";

export const Result = ({ result }) => {
  return (
    <StyledContainer>
      {!!result && (
        <StyledResult>
          💸{result.fromAmount.toFixed(2)}PLN = {result.toAmount.toFixed(2)}
          {result.currency}💸
        </StyledResult>
      )}
    </StyledContainer>
  );
};
