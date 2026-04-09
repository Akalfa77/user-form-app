import React, { useState } from 'react'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import { INITIAL_FORM_STATE, CAR_OPTIONS, GENDER_OPTIONS } from '../../utils/constants'
import FormCheckbox from './FormCheckbox'

export default function UserForm() {

    const [formData, setFormData] = useState(INITIAL_FORM_STATE)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted:", formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Name"
                name="name"
                type='text'
                value={formData.name}
                error=""
            />

            <FormInput
                label="Email"
                name="email"
                type='text'
                value={formData.email}
                error=""
            />

            <FormInput
                label="Phone No."
                name="phone"
                type='text'
                value={formData.phone}
                error=""
            />


            <FormSelect
                label="Choose your fav car"
                name="car"
                value={formData.car}
                options={CAR_OPTIONS}
                error=""
            />

            <FormInput
                label="Password"
                name="password"
                type='text'
                value={formData.password}
                error=""
            />

            <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type='text'
                value={formData.confirmPassword}
                error=""
            />

            <FormRadio
                label="Select your gender"
                name="Gender"
                selectedValue={formData.gender}
                options={GENDER_OPTIONS}
                error=""
            />

            <FormRange
                label="CGPA"
                name="cgpa"
                value={formData.cgpa}
                min={0}
                max={10}
                error=""
            />

            <FormCheckbox
                label="Terms & Conditions"
                name="terms"
                checked={formData.terms}
                error=""
            />


            <div className="form-buttons">
                <button type='submit' className="btn btn-submit">Submit</button>
                <button type='button' className="btn btn-clear">Clear</button>
            </div>
        </form>
    )
}
