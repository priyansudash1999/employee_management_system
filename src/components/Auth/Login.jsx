import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // Two way Binding
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="bg-gray-900 text-white flex justify-center items-center h-screen w-full">
      <div className="p-16 bg-transparent border border-cyan-600 rounded-lg shadow-lg border-dotted">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-5" onSubmit={submitHandler}> 
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="p-3 rounded bg-gray-700 border border-cyan-600 text-white focus:outline-none focus:ring focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="p-3 rounded bg-gray-700 border border-cyan-600 text-white focus:outline-none focus:ring focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-center font-medium bg-blue-600 hover:bg-blue-700 rounded text-white transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
