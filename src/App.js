import Header from "./Header";
import FormContainer from "./FormContainer";
import Form from "./Form";

function App() {
  return (
    <>
      <Header />
      <FormContainer
        form={<Form />}
      />
    </>
  );
}

export default App;
