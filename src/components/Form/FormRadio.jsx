import React from 'react'

function FormRadio({ label, name, options, selectedValue, onChange, onBlur, error }) {
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
                            onBlur={onBlur}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}

export default React.memo(FormRadio)
