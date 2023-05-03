import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  max-width: 500px;
  height: 450px;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 50px 15px;
  border-radius: 15px;
  margin: auto auto 100px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
`;

const StyledForm = styled.form`
  margin: auto 8px;
`;

const StyledFieldset = styled.fieldset`
  border: 3px solid;
`;

const StyledLegend = styled.legend`
  padding: 20px;
  border: 2px dashed;
  font-size: 15px;
`;

const LabelText = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 90px;
  text-align: center;
  font-weight: bolder;
  padding: 5px;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.tan};
  transition: 0.8s;
  flex-grow: 1;

  &:focus {
    background-color: rgb(214, 171, 148);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.tan};
  transition: background 1s, 1s;

  &:hover {
    background-color: rgb(214, 171, 148);
    transform: scale(1.02);
  }

  &:active {
    background-color: rgb(214, 145, 108);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: brown;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Loading = styled.div`
  padding: 20px;
  border: 2px dashed;
  font-size: 15px;

  ${({ error }) =>
    error &&
    css`
      color: crimson;
      border: crimson 2px dashed;
    `}
`;

export {
  Loading,
  StyledContainer,
  StyledForm,
  StyledFieldset,
  StyledLegend,
  LabelText,
  StyledInput,
  StyledButton,
  Link,
  StyledLabel,
};
