import { Header } from "./Header";
import { Form } from "./Form";
import { Result } from "./Result"

function App() {
  return (
    <>
      <Header />
      <Form resultComponent={<Result />} />
    </>
  );
}

export default App;
