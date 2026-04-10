import React from 'react'
import './App.css'
import UserForm from './components/Form/UserForm'
import UserTable from './components/Table/UserTable'
function App() {

  return (
    <div className="app-container">
      <h1>User Form App</h1>

      <div className="form-section">
        <h2>User Form</h2>
        <UserForm />
      </div>

      <div className="table-section">
        <h2>User Records</h2>
        <UserTable />
      </div>
    </div>
  )
}

export default App
