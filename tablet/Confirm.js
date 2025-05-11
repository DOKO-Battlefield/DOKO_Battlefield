// src/tablet/Confirm.js
import { useLocation } from 'react-router-dom'

export default function Confirm() {
  const { state } = useLocation()

  return (
    <div className="text-center p-6 mt-10">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">You're Checked In!</h2>
      <p className="mb-2 text-gray-300">Necklace ID / QR Code:</p>
      <p className="text-2xl font-mono mb-6 bg-gray-800 p-2 rounded inline-block">{state.qrCode}</p>

      <p className="text-gray-400">Keep your necklace on. It will light up and buzz when it's your time!</p>
    </div>
  )
}
