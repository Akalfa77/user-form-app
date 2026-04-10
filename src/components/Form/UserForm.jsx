import React, { useEffect, useContext, useState } from 'react'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import { INITIAL_FORM_STATE, CAR_OPTIONS, GENDER_OPTIONS } from '../../utils/constants'
import FormCheckbox from './FormCheckbox'
import useFormValidation from '../../hooks/useFormValidation'
import { UserContext } from '../../context/UserContext'

export default function UserForm() {

    const [formData, setFormData] = useState(INITIAL_FORM_STATE)
    const [touchedFields, setTouchedFields] = useState({})
    const { addUser, updateUser, editingUser, setEditingUser, getExistingEmails } = useContext(UserContext)


    const { errors, isValid } = useFormValidation(formData, [], touchedFields)

    const existingEmails = getExistingEmails().filter(
        email => !editingUser || email !== editingUser.email
    )
    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser)
            setTouchedFields({
                name: true,
                email: true,
                phone: true,
                gender: true,
                password: true,
                confirmPassword: true,
                car: true,
                cgpa: true,
                terms: true
            })
        }
    }, [editingUser])

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target

        setFormData(prevData => ({
            ...prevData, [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleBlur = (e) => {
        const { name } = e.target

        setTouchedFields(prev => ({
            ...prev,
            [name]: true
        }))
    }

    const handleFocus = (e) => {
        const { name } = e.target

        if (!touchedFields[name]) {
            setTouchedFields(prev => ({
                ...prev,
                [name]: true
            }))
        }
    }

    const handleClear = () => {
        setFormData(INITIAL_FORM_STATE)
        setTouchedFields({})
        setEditingUser(null)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setTouchedFields({
            name: true,
            email: true,
            phone: true,
            gender: true,
            password: true,
            confirmPassword: true,
            car: true,
            cgpa: true,
            terms: true
        })

        if (isValid) {
            if (editingUser) {
                updateUser(editingUser.id, formData)
            } else {
                addUser(formData)
            }
            handleClear()
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Name"
                name="name"
                type='text'
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                onBlur={handleBlur}
            />

            <FormInput
                label="Email"
                name="email"
                type='text'
                value={formData.email}
                error={errors.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />

            <FormInput
                label="Phone No."
                name="phone"
                type='text'
                value={formData.phone}
                error={errors.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />


            <FormSelect
                label="Choose your fav car"
                name="car"
                value={formData.car}
                options={CAR_OPTIONS}
                error={errors.car}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />

            <FormInput
                label="Password"
                name="password"
                type='text'
                value={formData.password}
                error={errors.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />

            <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type='text'
                value={formData.confirmPassword}
                error={errors.confirmPassword}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />

            <FormRadio
                label="Select your gender"
                name="gender"
                selectedValue={formData.gender}
                options={GENDER_OPTIONS}
                error={errors.gender}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />

            <FormRange
                label="CGPA"
                name="cgpa"
                value={formData.cgpa}
                min={0}
                max={10}
                error={errors.cgpa}
                onChange={handleInputChange}
            />

            <FormCheckbox
                label="Terms & Conditions"
                name="terms"
                checked={formData.terms}
                error={errors.terms}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />


            <div className="form-buttons">
                <button type='submit' className="btn btn-submit" disabled={!isValid}>Submit</button>
                <button type='button' onClick={handleClear} className="btn btn-clear">Clear</button>
            </div>
        </form>
    )
}
