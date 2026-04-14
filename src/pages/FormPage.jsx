import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import UserForm from '../components/Form/UserForm'
import UserTable from '../components/Table/UserTable'

export default function FormPage() {

    const { users } = useContext(UserContext)
    const navigate = useNavigate()

    const recentUsers = users.slice(0, 3)

    const handleViewMore = () => {
        navigate('/users')
    }

    return (
        <div className='app-container'>
            <h1>User Form App</h1>

            <div className='form-section'>
                <h2>User form</h2>
                <UserForm />
            </div>

            <div className='table-section'>
                <div className='table-header'>
                    <h2>Recent Users</h2>
                    {users.length > 3 && (
                        <button className="btn btn-view-more" onClick={handleViewMore}>View More</button>
                    )}
                </div>

                <UserTable users={recentUsers} />
            </div>
        </div>
    )
}
