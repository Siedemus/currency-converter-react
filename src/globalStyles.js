import { createGlobalStyle } from "styled-components";
import background from "./money.jpg";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after ::before {
  box-sizing: inherit;
}

body {
  background: url(${background}) center / cover fixed no-repeat;
  color: rgb(223, 205, 195);
  max-width: 800px;
  margin: 8px auto;
  font-family: 'Roboto Mono', sans-serif;
  overflow: hidden;
  padding: 5px;
}

@media screen and (max-width: 992px) {
    overflow: auto;
}
`;

export { GlobalStyles };
