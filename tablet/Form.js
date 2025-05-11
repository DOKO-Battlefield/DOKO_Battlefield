// src/tablet/Form.js
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Form() {
  const [form, setForm] = useState({ first_name: '', last_name: '', username: '', email: '', room: '' })
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()

    const userRes = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: form.first_name, last_name: form.last_name, username: form.username, email: form.email }),
    })

    const user = await userRes.json()

    await fetch('http://localhost:5000/scan/waiting-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, room_id: form.room }),
    })

    navigate('/confirm', { state: { ...form, qrCode: user.qr_code || 'DOKO123-ALA' } })
  }

  return (
    <div className="p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Check-In Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          className="w-full p-2 rounded text-black"
          onChange={handleChange}
        />
          <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          className="w-full p-2 rounded text-black"
          onChange={handleChange}
        />
         <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full p-2 rounded text-black"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 rounded text-black"
          onChange={handleChange}
        />
        
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          Join The Battlefield
        </button>
      </form>
    </div>
  )
}
