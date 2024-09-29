import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import { doSignOut } from './firebase/auth';

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClick1 = () => {
    navigate('/Rtmpsetup');
  };

  const onClick2 = () => {
    navigate('/Studio');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen flex flex-col justify-between" style={{ backgroundColor: '#000', color: 'white', padding: '1rem' }}>
        <div>
          <div className="mb-6 relative">
            <button onClick={toggleDropdown} className="flex items-center w-full">
              <img src="your-profile-pic-url" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold truncate">
                {currentUser.displayName ? currentUser.displayName : currentUser.email}
              </h2>
              <svg
                className={`w-4 h-4 ml-auto transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-gray-900 border border-white rounded-lg shadow-lg z-10">
                <ul className="text-white">
                  <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                    <img src="https://img.icons8.com/material-rounded/24/user-group-man-woman.png" alt="Create Team" className="w-4 h-4 mr-2" />
                    <button className='text-sm text-white underline'>Create Team</button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                    <img src="https://img.icons8.com/ios/50/settings--v1.png" alt="Settings" className="w-4 h-4 mr-2" />
                    <button className='text-sm text-white underline'>Settings</button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                    <img src="https://img.icons8.com/ios/50/bounced-check.png" alt="Billing" className="w-4 h-4 mr-2" />
                    <button className='text-sm text-white underline'>Billings</button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                    <img src="https://img.icons8.com/ios/50/user--v1.png" alt="User" className="w-4 h-4 mr-2" />
                    <button className='text-sm text-white underline'>User</button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                    <img src="https://img.icons8.com/ios/50/exit--v1.png" alt="Logout" className="w-4 h-4 mr-2" />
                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-red-600 underline'>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <nav>
            <ul>
              <li className="mb-4 cursor-pointer"><button>Home</button></li>
              <li className="mb-4 cursor-pointer"><button>Past streams</button></li>
              <li className="mb-4 cursor-pointer"><button>Video storage</button></li>
              <li className="mb-4 cursor-pointer"><button>Channels</button></li>
              <li className="mb-4 cursor-pointer"><button>Analytics</button></li>
            </ul>
          </nav>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-500 flex flex-wrap justify-between">
          <ul className="text-sm text-gray-500 flex flex-wrap justify-between">
            <li className="mr-2 cursor-pointer underline"><button>Pricing</button></li>
            <li className="mr-2 cursor-pointer underline"><button>API</button></li>
            <li className="mr-2 cursor-pointer underline"><button>Referral Program</button></li>
            <li className="mr-2 cursor-pointer underline"><button>Speed Test</button></li>
            <li className="mr-2 cursor-pointer underline"><button>Terms</button></li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-px h-screen bg-white"></div> {/* White vertical line separating left and right */}

      {/* Main content */}
      <div className="flex-1 p-10 text-white">
        {/* Top section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl">Streams</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">+ Create New</button>
        </div>

        {/* Streams Section */}
        <div className="space-y-6 max-w-3xl mx-auto"> {/* Centered main content */}
          {/* Stream via RTMP box */}
          <div className="bg-gray-900 p-6 rounded-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stream via RTMP (OBS, Vmix, Zoom) with Restream</h3>
              <button className="text-sm text-gray-400">RTMP Setup</button>
            </div>
            <button onClick={onClick1} className="bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-600">RTMP Setup</button>
          </div>

          {/* Go live box */}
          <div className="bg-gray-900 p-6 rounded-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Go live from your browser with Restream Studio</h3>
              <button  className="text-sm text-gray-400">Studio</button>
            </div>
            <button onClick={onClick2} className="bg-indigo-800 text-white py-2 px-4 rounded hover:bg-indigo-700">Enter Studio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
