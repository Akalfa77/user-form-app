import React from 'react'

export default function FormRange({ label, name, value, onChange, min, max, error }) {
    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <div className='form-range-wrapper'>
                <input type='range'
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                />
                <span className='range-value'>{value}</span>
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}