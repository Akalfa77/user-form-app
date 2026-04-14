import React, { createContext, useState, useMemo, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [users, setUsers] = useLocalStorage('users', [])
    const [editingUser, setEditingUser] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    const addUser = useCallback((userData) => {
        const newUser = {
            id: Date.now(),
            ...userData
        }
        setUsers(prevUsers => [...prevUsers, newUser])
    }, [setUsers])

    const updateUser = useCallback((id, updatedData) => {
        setUsers(prevUsers => prevUsers.map((user) => user.id === id ? { ...user, ...updatedData } : user))
        setEditingUser(null)
    }, [setUsers])

    const deleteUser = useCallback((id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete..?")

        if (confirmDelete) {
            setUsers(prevUsers => prevUsers.filter((user) => user.id !== id))

            setEditingUser(prevEditing =>
                prevEditing && prevEditing.id === id ? null : prevEditing
            )
        }
    }, [setUsers])

    const getExistingEmails = useCallback(() => {
        return users.map(user => user.email)
    }, [users])

    const filteredUsers = useMemo(() => {
        if (!searchTerm.trim()) {
            return users
        }

        const lowerSearch = searchTerm.toLowerCase()
        return users.filter(
            (user) => user.name.toLowerCase().includes(lowerSearch) || user.email.toLowerCase().includes(lowerSearch) || user.phone.includes(lowerSearch)
        )
    }, [users, searchTerm])

    const value = useMemo(() => ({
        users,
        editingUser,
        setEditingUser,
        addUser,
        updateUser,
        deleteUser,
        getExistingEmails,
        searchTerm,
        setSearchTerm,
        filteredUsers
    }), [
        users,
        editingUser,
        addUser,
        updateUser,
        deleteUser,
        getExistingEmails,
        searchTerm,
        filteredUsers

    ])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
