import React from 'react'

function FormCheckbox({ label, name, checked, onChange, onBlur, error }) {
    return (
        <div className="form-group">
            <div className="form-checkbox-wrapper">
                <input type='checkbox'
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <label htmlFor={name}> {label}</label>
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}

export default React.memo(FormCheckbox)
