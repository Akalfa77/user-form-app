import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import UserRow from './UserRow'

export default function UserTable() {

    const { users, deleteUser, setEditingUser } = useContext(UserContext)


    const handleEdit = (user) => {
        setEditingUser(user)
        // Scroll to form (smooth UX)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDelete = (userId) => {
        deleteUser(userId)
    }

    return (
        <div>
            {users.length === 0 ? (
                <p className="no-data">No users found. Add your first user above!</p>
            ) : (
                <div className="table-wrapper">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Gender</th>
                                <th>Favorite Car</th>
                                <th>CGPA</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <UserRow
                                    key={user.id}
                                    user={user}
                                    onEdit={() => handleEdit(user)}
                                    onDelete={() => handleDelete(user.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
