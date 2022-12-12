import Header from "./Header";
import FormContainer from "./FormContainer";
import Form from "./Form";
import Result from "./Result";
import Button from "./Button";
import Description from "./Description";

function App() {
  return (
    <>
      <Header />
      <FormContainer
        form={<Form />}
        button={<Button/>}
        result={<Result />}
      />
      <Description/>
    </>
  );
}

export default App;
