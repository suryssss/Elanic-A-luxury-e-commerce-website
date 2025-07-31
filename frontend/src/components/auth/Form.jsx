import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthForm() {
  return (
    <div className="flex min-h-screen w-full">
    <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
      <div className="max-w-md space-y-6 text-center text-primary-foreground">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Elanic
        </h1>
        <p className="text-sm text-muted-foreground">
          Your one stop shop for all your needs
        </p>
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  </div>
  )
}

export default AuthForm