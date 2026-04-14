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
            <div className="form-row">
                <FormInput
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    className="form-input"
                />

                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    className="form-input"
                />
            </div>

            <div className="form-row">
                <FormInput
                    label="Phone No"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    className="form-input"
                />

                <FormRadio
                    label="Select Your Gender"
                    name="gender"
                    options={GENDER_OPTIONS}
                    selectedValue={formData.gender}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                />
            </div>

            <div className="form-row">
                <FormSelect
                    label="Choose your favorite car"
                    name="car"
                    value={formData.car}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    options={CAR_OPTIONS}
                    error={errors.car}
                    className="form-select"

                />

                <FormRange
                    label="Your CGPA"
                    name="cgpa"
                    value={formData.cgpa}
                    onChange={handleInputChange}
                    min={0}
                    max={10}
                    error={errors.cgpa}
                    className="form-range"

                />
            </div>

            <div className="form-row">
                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    className="form-input"
                />

                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.confirmPassword}
                    className="form-input"
                />
            </div>



            <FormCheckbox
                label="I agree to Terms & Conditions"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.terms}
            />

            <div className="form-buttons">
                <button
                    type="submit"
                    className="btn btn-submit"
                    disabled={!isValid}
                >
                    {editingUser ? 'Update' : 'Submit'}
                </button>
                <button type="button" onClick={handleClear} className="btn btn-clear">
                    Clear
                </button>
            </div>
        </form>
    )
}