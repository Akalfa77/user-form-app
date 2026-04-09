import React from 'react'

export default function FormRadio({ label, name, options, selectedValue, onChange, error }) {
    return (
        <div className="form-group">
            <p>{label}</p>
            <div className="form-radio-group">
                {options.map((option) => (
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={onChange}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}
