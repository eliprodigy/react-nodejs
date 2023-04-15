import React, { useState } from 'react';

export default function FetchData() {
  const [inputText, setInputText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            defaultValue={''}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button type="submit" className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Message
      </button>
      </form>
      {message && (
        <div className="rounded-md bg-yellow-50 p-4 mt-8">
          <div className="flex">
              <div className="ml-3">
                <div className="mt-2 text-sm text-yellow-700">
                  <p>{message}</p>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}