import './App.css';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import { AuthProvider } from './components/contexts/authContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Correct use of createBrowserRouter and RouterProvider
import Rtmpsetup from './components/setup/Rtmpsetup';
import Studio from './components/setup/Studio';

// Corrected the code to use RouterProvider with routes defined via createBrowserRouter.
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,  // Changed login to Login (capitalized component name)
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/Rtmpsetup',
      element: <Rtmpsetup />
    },
    {
      path: '/Studio',
      element: <Studio />
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />  {/* Correctly providing the router */}
    </AuthProvider>
  );
}

export default App;
