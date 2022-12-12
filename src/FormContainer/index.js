import './style.css';

const FormContainer = ({ form, result, button }) => {
    return (
        <div className="container">
            {form}
            {button}
            {result}
        </div>
    );
};

export default FormContainer;