import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 500px;
  background-color: rgba(45, 50, 52, 0.95);
  padding: 50px 15px;
  border-radius: 15px;
  margin: auto auto 100px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledForm = styled.form`
  margin: auto 8px;
`;

const StyledFieldset = styled.fieldset`
  border: 3px solid;
`;


export { StyledContainer, StyledForm, StyledFieldset,};
