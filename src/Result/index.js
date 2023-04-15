import "./style.css";

export const Result = ({ result }) => {
    return (
        <span className="form__containerText">
            {!!result &&
                <p className="form__result">
                    💸{result.fromAmount.toFixed(2)}PLN = {result.toAmount.toFixed(2)}{result.currency}💸
                </p>
            }
        </span>
    );
};