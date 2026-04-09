import React from 'react'

export default function FormCheckbox({ label, name, checked, onChange, error }) {
    return (
        <div className="form-group">
            <div className="form-checkbox-wrapper">
                <input type='checkbox'
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={name}> {label}</label>
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}
