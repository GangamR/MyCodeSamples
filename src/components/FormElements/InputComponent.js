import React from 'react';

const InputComponent = ({
     input,
     type,
     label,
     placeHolder,
    disabled,
     meta: { touched, error, warning }
 }) => (
    <div className={`form-group ${(touched && error) ? 'has-error' : ''}`}>
        {label && <label htmlFor={input.name}>{label}</label>}
        <input {...input} placeholder={placeHolder} type={type} disabled={disabled} className="form-control" />
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
)

export default InputComponent;