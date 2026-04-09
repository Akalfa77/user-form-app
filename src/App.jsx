import React from 'react'
import './App.css'
import UserForm from './components/Form/UserForm'
function App() {

  return (
    <div className="app-container">
      <h1>User Management System</h1>

      <div className="form-section">
        <h2>User Form</h2>
        <UserForm />
      </div>

      <div className="table-section">
        <h2>User Records</h2>
        <p>Table will come here...</p>
      </div>
    </div>
  )
}

export default App
