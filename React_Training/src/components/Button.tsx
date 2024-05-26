import React from 'react';


interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label} ) =>{
    return(
        <button type='button' className='h-12 px-6 font-semibold rounded-lg flex items-center justify-center bg-dark-blue text-white dark:bg-sky-500 hover:bg-slate-700 dark:hover:bg-sky-400'>
            {label}
        </button>
    )
}

export default Button;