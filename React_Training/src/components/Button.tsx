import React from 'react';


interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label} ) =>{
    return(
        <button type='button' className='h-12 px-6 font-semibold rounded-lg flex items-center justify-center bg-sky-500 hover:bg-grey'>
            {label}
        </button>
    )
}

export default Button;