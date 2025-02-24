import React from 'react'

function Button({ children, onClick }) {
    return (
        <button type='button' onClick={onClick} className='bg-[var(--button-color)] rounded-sm py-1 my-10 cursor-pointer shadow-gray-800'>{children}</button>
    )
}

export default Button