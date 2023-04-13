import "./style.css";
import { currencies } from "../currencies";

export const Form = ({ resultComponent }) => {
    return (
        <div className="formContainer">
            <form className="form">
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Kalkulator Walut</legend>
                    <p>
                        <label>
                            <span className="form__labelText">Kwota*:</span>
                            <input
                                type="number"
                                min="0.01"
                                step="any"
                                name="amount"
                                className="form__field"
                                required
                                placeholder="PLN"
                                max="9999999999999999"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form__labelText">Waluta:</span>
                            <select className="form__field" name="currency">
                                {currencies.map(currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </p>
                    {resultComponent}
                </fieldset>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
                <p>
                    * - Pola wymagane <br />
                    Kursy pobrane z (<a className="form__link" href="https://www.xe.com/" target="_blank">xe.com</a>)
                </p>
            </form>
        </div>
    )
}