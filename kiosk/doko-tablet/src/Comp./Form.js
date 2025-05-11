import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { termsText, waiverText } from './Terms';

export default function KioskForm() {
  const [showTerms, setShowTerms] = useState(false);
  const [showWaiver, setShowWaiver] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    group: '',
    email: '',
    phone: '',
    photos_opt_in: false,
    agreed_terms: false,
    waiver: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreed_terms || !form.waiver) {
      alert('You must agree to all terms before continuing.');
      return;
    }

    const userRes = await api.post('/users', {
      first_name: form.first_name,
      last_name: form.last_name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      group_name: form.group,
    });

    const user = userRes.data;

    await api.post('/scan/waiting-list', {
      user_id: user.id,
      room_id: 1,
    });

    navigate('/confirm', {
      state: { qrCode: user.qr_code || 'DOKO123-NEW' },
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 text-white">
      <h2 className="text-3xl font-bold mb-6 text-purple-500">Check-In Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="first_name" required onChange={handleChange} placeholder="First Name" className="w-full p-2 rounded text-black" />
        <input name="last_name" required onChange={handleChange} placeholder="Last Name" className="w-full p-2 rounded text-black" />
        <input name="username" required onChange={handleChange} placeholder="Choose Your Warrior Name" className="w-full p-2 rounded text-black" />
        <input name="group" onChange={handleChange} placeholder="Group/Party Name (optional)" className="w-full p-2 rounded text-black" />
        <input type="email" name="email" required onChange={handleChange} placeholder="Email" className="w-full p-2 rounded text-black" />
        <input type="tel" name="phone" onChange={handleChange} placeholder="Phone (optional)" className="w-full p-2 rounded text-black" />

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="waiver"
            checked={form.waiver}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label className="text-sm text-gray-300">
            I understand and accept the risks of{' '}
            <span onClick={() => setShowWaiver(true)} className="terms-highlight">
              Waiver
            </span>
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="agreed_terms"
            checked={form.agreed_terms}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label className="text-sm text-gray-300">
            I agree to the{' '}
            <span onClick={() => setShowTerms(true)} className="terms-highlight">
              Terms & Agreement
            </span>
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="photos_opt_in"
            checked={form.photos_opt_in}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-sm text-gray-300">📸 Yes, send me the photos I take today!</label>
        </div>

        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
          Scan QR / Tap Necklace to Finish
        </button>
      </form>

      {(showTerms || showWaiver) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white p-8 overflow-y-auto z-50">
          <button
            onClick={() => {
              setShowTerms(false);
              setShowWaiver(false);
            }}
            className="absolute top-4 right-4 text-purple-300 hover:text-white text-2xl"
          >
            ✖
          </button>
          {(showTerms || showWaiver) && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button onClick={() => {
        setShowTerms(false)
        setShowWaiver(false)
      }} className="modal-close">✖</button>
      <pre className="modal-text">{showTerms ? termsText : waiverText}</pre>
    </div>
  </div>
)}
        </div>
      )}
    </div>
  );
}
