import { Header } from "./Header";
import { Form } from "./Form";
import { Result } from "./Result"
import { currencies } from "./currencies";

function App() {
  const calcResult = (amount, currency) => {
    const cost = currencies.find(curr => curr.short === currency).cost

    return {
      fromAmount: amount,
      currency,
      toAmount: cost * amount
    };
  };

  return (
    <>
      <Header />
      <Form calcResult={calcResult} resultComponent={<Result />} />
    </>
  );
}

export default App;
