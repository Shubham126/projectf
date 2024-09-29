import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import img1 from '../../assets/img1.webp';

function Login() {
  const { userLoggedIn } = useAuth();

  // State management for form inputs and authentication status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  // Handler for Google sign-in
  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {/* Redirect to home if user is already logged in */}
      {userLoggedIn && <Navigate to="/home" replace={true} />}

      <div className="min-h-screen flex flex-col md:flex-row bg-black">
        {/* Left side (form) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Create an account</h1>
          <p className="mb-4">Enter your email below to create your account</p>

          {/* Social Sign-In Buttons */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={onGoogleSignIn}
              className="w-1/2 bg-black border-2 border-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800"
            >
              <img
                src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                alt="Google"
                className="w-6"
              />
              <span className="text-white">Google</span>
            </button>
            <button
              // Assuming you have a handler for GitHub sign-in
              onClick={() => {}}
              className="w-1/2 bg-black border-2 border-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-800"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-6 invert"
              />
              <span className="text-white">Github</span>
            </button>
          </div>

          <p className="text-center text-gray-400 mb-4">OR CONTINUE WITH</p>

          {/* Display error message if any */}
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          {/* Login Form */}
          <form onSubmit={onSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-black border-2 border-white mb-3 text-gray-300 focus:outline-none focus:ring focus:ring-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded bg-black border-2 border-white mb-6 text-gray-300 focus:outline-none focus:ring focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSigningIn}
              className="w-full bg-black border-2 border-white py-3 rounded text-white hover:bg-gray-800 disabled:opacity-50"
            >
              {isSigningIn ? 'Signing In...' : 'Login'}
            </button>
          </form>

          {/* Link to Register Page */}
          <p className="text-center text-gray-400 mt-4">
            Does not have an account?{' '}
            <Link to="/register" className="text-white underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right side (image) */}
        <div className="w-full md:w-2/3 bg-black border-l-2 border-white flex flex-col items-center justify-center p-4">
          <div className="w-full flex items-center justify-center">
            <img
              src={img1}
              alt="Your Image"
              className="w-full h-auto max-w-lg object-cover rounded"
            />
          </div>
          <p className="text-white text-center mt-4">
            Additional content goes here
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
