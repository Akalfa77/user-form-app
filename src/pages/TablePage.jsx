import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import UserTable from '../components/Table/UserTable'

export default function TablePage() {

    const { users, searchTerm, setSearchTerm, filteredUsers } = useContext(UserContext)
    const navigate = useNavigate()

    const handleBackToForm = () => {
        navigate('/')
    }

    return (
        <div className="app-container">
            <div className="page-header">
                <button className="btn btn-back" onClick={handleBackToForm}>
                    Back To Form
                </button>
                <h1>Data Table</h1>
            </div>

            <div className="table-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* 
                {filteredUsers.length === 0 ? (
                    <p>{searchTerm ? 'No User Found' : 'No Data Added Yet'}</p> */}
                {filteredUsers.length === 0 ? (
                    <p className="no-data">
                        {searchTerm
                            ? 'No User Found'
                            : 'No Data Added Yet'}
                    </p>
                ) : (
                    <>
                        <UserTable users={filteredUsers} />
                        <div className="table-summary">
                            <p className="text-muted">
                                Showing {filteredUsers.length} of {users.length} users
                            </p>
                        </div>
                    </>

                )}
            </div>
        </div>
    )
}
