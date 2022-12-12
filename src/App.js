import Header from "./Header";
import FormContainer from "./FormContainer";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <>
      <Header />
      <FormContainer
        form={<Form />}
        result={<Result />}
      />
    </>
  );
}

export default App;
