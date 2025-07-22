import React, { useState } from 'react';
import API from '../services/api';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-md"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-md"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        Register
      </button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </form>
  );
};

export default Register;
