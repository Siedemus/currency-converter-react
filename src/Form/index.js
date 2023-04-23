import "./style.css";
import { currencies } from "../currencies";
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
} from "./styled";

const DEFAULT_CURRENCY = currencies[0].short;

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [result, setResult] = useState("");

  const calcResult = (amount, currency) => {
    const cost = currencies.find((curr) => curr.short === currency).cost;

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
      <Clock />
      <StyledForm onSubmit={onFormSubmit}>
        <StyledFieldset>
          <StyledLegend>Kalkulator Walut</StyledLegend>
          <p>
            <label>
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
            </label>
          </p>
          <p>
            <label>
              <LabelText>Waluta:</LabelText>
              <StyledInput
                onChange={({ target }) => setCurrency(target.value)}
                as={"select"}
                name="currency"
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </StyledInput>
            </label>
          </p>
          <Result result={result} />
        </StyledFieldset>
        <p>
          <StyledButton>Przelicz</StyledButton>
        </p>
        <p>
          * - Pola wymagane <br />
          Kursy pobrane z (
          <a
            className="form__link"
            rel="noreferrer"
            href="https://www.xe.com/"
            target="_blank"
          >
            xe.com
          </a>
          )
        </p>
      </StyledForm>
    </StyledContainer>
  );
};
