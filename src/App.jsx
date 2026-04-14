import React from 'react'
import './App.css'
import UserForm from './components/Form/UserForm'
import UserTable from './components/Table/UserTable'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import FormPage from './pages/FormPage'
import TablePage from './pages/TablePage'
function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/users" element={<TablePage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
