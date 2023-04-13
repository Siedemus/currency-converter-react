import "./style.css";

export const Form = () => {
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
                            <select className="form__field"name="currency">
                                <option value="GPB">Funt brytyjski</option>
                                <option value="USD">Dolar amerykański</option>
                                <option value="EUR">Euro</option>
                                <option value="CHF">Frank szwajcarski</option>
                            </select>
                        </label>
                    </p>
                    <span className="form__containerText">
                        <p className="form__result"></p>
                    </span>
                </fieldset>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
                <p>
                    * - Pola wymagane <br/>
                        Kursy pobrane z (<a className="form__link" href="https://www.xe.com/" target="_blank">xe.com</a>)
                </p>
            </form>
        </div>
    )
}