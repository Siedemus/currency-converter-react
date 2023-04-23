import { StyledContainer } from "./styled";
import "./style.css";

export const Result = ({ result }) => {
  return (
    <StyledContainer>
      {!!result && (
        <p className="form__result">
          💸{result.fromAmount.toFixed(2)}PLN = {result.toAmount.toFixed(2)}
          {result.currency}💸
        </p>
      )}
    </StyledContainer>
  );
};
