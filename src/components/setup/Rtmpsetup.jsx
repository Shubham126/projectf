import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCopy, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Rtmpsetup() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-800 focus:outline-none">
            <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 text-gray-500" />
          </button>
          <h1 className="text-xl font-semibold text-white">Encoder</h1>
          <button className="text-blue-400 border border-blue-400 rounded px-4 py-2 hover:bg-blue-400 hover:text-white">
            Upgrade
          </button>
        </div>
        <div className="flex items-center">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <img src="/placeholder-user.jpg" alt="@user" className="object-cover h-full w-full" />
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-800 rounded-lg p-6 space-y-6">
            <div className="flex justify-between items-center">
              <img
                src="/placeholder.svg"
                alt="Restream Logo"
                className="h-8 w-8"
              />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-white">Set Up Your Livestream</h2>
              <p className="text-gray-400">Copy and paste RTMP settings into your streaming software.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="rtmp-url" className="text-sm font-medium text-gray-400">
                  RTMP URL
                </label>
                <div className="flex">
                  <input
                    id="rtmp-url"
                    placeholder="rtmp://live.restream.io/live"
                    className="flex-1 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded"
                  />
                  <button className="ml-2 bg-gray-700 text-white px-4 py-2 rounded flex items-center hover:bg-gray-600">
                    <FontAwesomeIcon icon={faCopy} className="h-4 w-4 mr-1" /> Copy
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="stream-key" className="text-sm font-medium text-gray-400">
                  Stream key
                </label>
                <div className="flex">
                  <input
                    id="stream-key"
                    type="password"
                    className="flex-1 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded"
                  />
                  <button className="ml-2 bg-gray-700 text-white px-4 py-2 rounded flex items-center hover:bg-gray-600">
                    <FontAwesomeIcon icon={faCopy} className="h-4 w-4 mr-1" /> Copy
                  </button>
                </div>
              </div>
              <button className="text-blue-400 p-0 underline">
                Add backup stream
              </button>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />
              <span className="text-sm">Explore how to connect OBS, Zoom, vMix</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Destinations</h3>
                <button className="text-gray-400 hover:text-white">
                  Chat
                </button>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                  + Add Channel
                </button>
                <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
                  Update Titles
                </button>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">0 of 2 active</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Toggle all</span>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="hidden" />
                      <div className="relative">
                        <div className="block w-10 h-6 bg-gray-700 rounded-full"></div>
                        <div className="dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-1 left-1 transition"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center space-y-4">
              <img
                src="/placeholder.svg"
                alt="Mascot"
                className="h-30 w-30"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                + Add First Channel
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-white font-semibold">Live with Restream</span>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
            Music & Art
          </button>
        </div>
        <div className="space-x-2">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
            EMBED STREAM
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
            STREAM SETTINGS
          </button>
        </div>
      </footer>
    </div>
  );
}
