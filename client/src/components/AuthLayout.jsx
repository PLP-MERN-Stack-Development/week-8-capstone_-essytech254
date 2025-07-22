import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-blue-500 text-white flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to HealthBuddy</h1>
          <p className="text-lg">Track your wellness. Log in or create an account to continue.</p>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
