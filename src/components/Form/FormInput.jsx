import React from 'react'

export default function FormInput({ label, name, type = 'text', value, onBlur, onChange, error }) {
    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <input type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

            {error && <span className="error-message">{error}</span>}
        </div>
    )
}
