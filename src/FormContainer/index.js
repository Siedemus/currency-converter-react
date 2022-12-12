import './style.css';

const FormContainer = ({ form, result }) => {
    return (
        <div className="container">
            {form}
            {result}
        </div>
    );
};

export default FormContainer;