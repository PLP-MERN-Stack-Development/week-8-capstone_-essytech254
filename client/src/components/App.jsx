import React, { useState } from 'react';
import AuthLayout from './components/AuthLayout';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

<Route path="/dashboard" element={<Dashboard />} />


function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthLayout>
      <div>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowLogin(true)}
            className={`px-4 py-2 ${showLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`px-4 py-2 ${!showLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
          >
            Register
          </button>
        </div>
        {showLogin ? <Login /> : <Register />}
      </div>
    </AuthLayout>
  );
}

export default App;
