import { Header } from "./Header";
import { Form } from "./Form";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey: "rgba(45, 50, 52, 0.95)",
    tan: "rgb(223, 205, 195)",
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Form />
    </ThemeProvider>
  );
}

export default App;
