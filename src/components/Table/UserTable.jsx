import { useCallback, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import UserRow from './UserRow'

function UserTable({ users }) {
    const { deleteUser, setEditingUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()

    const isTablePage = location.pathname === '/users'

    const handleEdit = useCallback((user) => {
        setEditingUser(user)

        if (isTablePage) {
            navigate('/')
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [isTablePage, navigate, setEditingUser])

    const handleDelete = useCallback((userId) => {
        deleteUser(userId)
    }, [deleteUser])

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

export default UserTable