import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="text-white text-lg font-bold">Shopping Site</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCheckoutClick}
      >
        Checkout
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Checkout Modal</h2>
              <button className="text-gray-500 mb-10 hover:text-gray-700" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <p>This is your checkout modal content.</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
