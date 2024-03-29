import { Result } from "./Result";
import { useState } from "react";
import { Clock } from "./Clock";
import {
  StyledContainer,
  StyledFieldset,
  StyledForm,
  StyledLegend,
  LabelText,
  StyledInput,
  StyledButton,
  Link,
  StyledLabel,
  Loading,
  Error,
} from "./styled";
import { useRates } from "./useRates";

export const Form = () => {
  const data = useRates();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("CHF");
  const [result, setResult] = useState("");

  const calcResult = (amount, currency) => {
    const cost = data.jsonData.rates[currency];

    setResult({
      fromAmount: +amount,
      currency,
      toAmount: cost * amount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calcResult(amount, currency);
    setAmount("");
  };

  return (
    <StyledContainer>
      {data.loading === "waiting" ? (
        <Loading>
          "Hej!😀 <b>Pobieramy dane z api Europejskiego Banku Centralnego</b>📲
          Daj nam chwilkę.⏰
        </Loading>
      ) : data.loading === "failed" ? (
        <Error>
          Ojoj! 🤯 Coś poszło nie tak. 😱 Sprawdź, czy masz połączenie z siecią,
          jeśli tak to błąd leży po naszej stronie przepraszamy. 🫢
        </Error>
      ) : (
        <>
          <Clock />
          <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
              <StyledLegend>Kalkulator Walut</StyledLegend>
              <p>
                <StyledLabel>
                  <LabelText>Kwota*:</LabelText>
                  <StyledInput
                    type="number"
                    min="0.01"
                    step="any"
                    name="amount"
                    required
                    placeholder="PLN"
                    max="9999999999999"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                  />
                </StyledLabel>
              </p>
              <p>
                <StyledLabel>
                  <LabelText>Waluta:</LabelText>
                  <StyledInput
                    onChange={({ target }) => setCurrency(target.value)}
                    as={"select"}
                    name="currency"
                  >
                    {Object.keys(data.jsonData.rates).map((rate) => (
                      <option key={rate} value={rate}>
                        {rate}
                      </option>
                    ))}
                  </StyledInput>
                </StyledLabel>
              </p>
              <Result result={result} />
            </StyledFieldset>
            <p>
              <StyledButton>Przelicz</StyledButton>
            </p>
            <p>
              * - Pola wymagane <br />
              Kursy pobrane z (
              <Link rel="noreferrer" href="https://exchangerate.host/#/" target="_blank">
                API Europejskiego Banku Centralnego
              </Link>
              )
            </p>
          </StyledForm>
        </>
      )}
    </StyledContainer>
  );
};
