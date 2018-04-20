import React from 'react';

const Select = props => {
    const renderSelectOptions = (vals, index) => {
        return (
            <option
                key={vals.value}
                value={vals.value}
            >
                vals.text
            </option>
        );
    }

    if (props && props.options) {
        return (
            <div className={`form-group ${(props.meta.touched && props.meta.error) ? 'has-error' : ''} ${props.className}`}>
                {props.label && <label htmlFor={props.input.name}>{props.label}</label>}
                <select {...props.input} className="form-control">
                    <option value="">Select</option>
                    {Object.keys(props.options).map(renderSelectOptions)}
                </select>
                {props.meta.touched && props.meta.error && <span className="text-danger">{props.meta.error}</span>}
            </div>
        )
    }
    return <div></div>
}

export default Select;