import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white bg-opacity-90 dark:bg-gray-blue dark:bg-opacity-40 backdrop-filter backdrop-blur-sm"></div>
      <div className="DocSearch-Modal bg-white dark:bg-gray-blue dark:text-slate-500 p-4 rounded-lg shadow-lg relative ">
        <div className="flex items-center border-b-2 dark:border-slate-500 p-2">
          <label className="DocSearch-MagnifierLabel" id="docsearch-label">
            <svg
              width="20"
              height="20"
              className="DocSearch-Search-Icon"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </label>
          <input
            className="DocSearch-Input dark:bg-gray-blue px-4 outline-none"
            aria-autocomplete="both"
            aria-labelledby="docsearch-label"
            id="docsearch-input"
            placeholder="Search documentation"
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            aria-activedescendant="docsearch-item-0"
            aria-controls="docsearch-list"
          />
          <button
            onClick={onClose}
            className="absolute right-2 font-semibold border-2 bg-white hover:border-slate-300 dark:border-0 rounded-lg dark:bg-slate-700 dark:bg-opacity-75 p-2 mb-3 dark:text-slate-300 text-xs"
          >
            Esc
          </button>
        </div>
        <ul className="mt-4 space-y-2 divide-y dark:divide-slate-700">
        {inputValue && (
            <li key="current" className="dark:text-white">
              {inputValue}
            </li>
          )}
          {items.map((item, index) => (
            <li key={index} className="dark:text-slate-500">
              {item}
            </li>
          ))}

        </ul>

        {children}
      </div>
    </div>
  );
};

export default Modal;
