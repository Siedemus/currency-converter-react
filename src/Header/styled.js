import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  font-size: 50px;
  margin: 60px auto;
  width: 100%;
  max-width: 200px;
  text-decoration: underline;
  font-family: "Oswald", sans-serif;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 15px;
  border-radius: 15px;
`;

export { StyledHeader };
