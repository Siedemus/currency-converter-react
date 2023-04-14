import { Header } from "./Header";
import { Form } from "./Form";
import { Result } from "./Result"
import { currencies } from "./currencies";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("")

  const calcResult = (amount, currency) => {
    const cost = currencies.find(curr => curr.short === currency).cost

    setResult({
      fromAmount: +amount,
      currency,
      toAmount: cost * amount
    });
  };

  return (
    <>
      <Header />
      <Form
        calcResult={calcResult}
        resultComponent={
          <Result
            result={result}
          />}
      />
    </>
  );
}

export default App;
