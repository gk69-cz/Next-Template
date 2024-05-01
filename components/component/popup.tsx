import React, { useState } from 'react'

interface modalProps {
  title: string;
  message: string;
  onSelect: (modalResults: boolean) => boolean;
}

const Popup: React.FC<modalProps> = ({ title, message, onSelect }) => {
  const onContinue = () => {
    setModalResults(true);
    onSelect(true);
  };

  const onCancel = () => {
    setModalResults(false);
    onSelect(false);
  };

  const [modalResults, setModalResults] = useState(false)
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-center">
      <div className="bg-white rounded-lg p-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="mb-4">
          <p>{message}</p>
        </div>
        <div className="text-center">
          <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onContinue}>
            Continue
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup