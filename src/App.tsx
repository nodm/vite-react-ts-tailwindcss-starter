import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tailwindCssLogo from './assets/tailwindcss.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-md w-full">
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} alt="Vite logo" className="h-16 w-16" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-16 w-16 animate-spin-slow"
            />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={tailwindCssLogo}
              alt="tailwindcss logo"
              className="h-16 w-16"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Vite + React + Tailwind CSS
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit{' '}
            <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className="text-sm text-gray-500 text-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
