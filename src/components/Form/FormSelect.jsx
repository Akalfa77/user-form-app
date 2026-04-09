import React from 'react'

export default function FormSelect({ label, name, options, value, onChange, error }) {
    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}
