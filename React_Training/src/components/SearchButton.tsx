import React from "react";

interface SearchButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchButton: React.FC<SearchButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 hover: bg-grey"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="flex-none text-slate-300 dark:text-slate-400"
        aria-hidden="true"
      >
        <path d="m19 19-3.5-3.5"></path>
        <circle cx="11" cy="11" r="6"></circle>
      </svg>
      <span className="flex-auto">{label}</span>
      <kbd className="font-sans font-semibold dark:text-slate-500">
        <abbr
          title="Control"
          className="no-underline text-slate-300 dark:text-slate-500"
        >
          Ctrl{" "}
        </abbr>{" "}
        K
      </kbd>
    </button>
  );
};


export default SearchButton;