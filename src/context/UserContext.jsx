import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [users, setUsers] = useLocalStorage('users', [])
    const [editingUser, setEditingUser] = useState(null)

    const addUser = (userData) => {
        const newUser = {
            id: Date.now(),
            ...userData
        }
        setUsers(prevUsers => [...prevUsers, newUser])
    }

    const updateUser = (id, updatedData) => {
        setUsers(prevUsers => prevUsers.map((user) => user.id === id ? { ...user, ...updatedData } : user))
        setEditingUser(null)
    }

    const deleteUser = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete..?")

        if (confirmDelete) {
            setUsers(prevUsers => prevUsers.filter((user) => user.id !== id))
        }

        if (editingUser && editingUser.id === id) {
            setEditingUser(null)
        }
    }

    const getExistingEmails = () => {
        return users.map(user => user.email)
    }

    const value = {
        users,
        editingUser,
        setEditingUser,
        addUser,
        updateUser,
        deleteUser,
        getExistingEmails
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
