// src/tablet/Welcome.js
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-500">Welcome to DOKO Battlefield</h1>
      <p className="mb-8 text-gray-300">Get ready to begin your adventure</p>
      <button
  onClick={() => navigate('/form')}
  className="bg-purple-700 px-8 py-5 rounded-xl text-white text-2xl hover:bg-purple-800 active:scale-95 transition-transform"
>
  🛡️ Start Check-In
</button>
    </div>
  )
}
