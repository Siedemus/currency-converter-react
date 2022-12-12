import './style.css';

const Form = () => {
    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota:*</span>
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
                        <span className="form__labelText">Waluta:*</span>
                        <select
                            name="currency"
                            className="form__field">
                            <option value="GPB">Funt brytyjski</option>
                            <option value="USD">Dolar amerykański</option>
                            <option value="EUR">Euro</option>
                            <option value="CHF">Frank szwajcarski</option>
                        </select>
                    </label>
                </p>
            </fieldset>
        </form>
    )
};

export default Form;