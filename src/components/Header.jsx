import React from 'react'

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
    {/* Back Arrow Icon */}
    <button className="btn btn-light p-2 rounded">
      <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    {/* Date and Time */}
    <p className="text-secondary">Mon Oct 07 2024</p>
  </div>
  )
}

export default Header