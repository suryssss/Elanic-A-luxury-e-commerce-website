import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthForm() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Left section (branding) */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-md text-center text-white px-6">
          <h1 className="text-5xl font-bold">Elanic</h1>
          <p className="text-lg mt-4 text-gray-300">
            Your one stop shop for all your needs
          </p>
        </div>
      </div>

      {/* Right section (form) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-background px-4 overflow-y-auto">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
