import React from 'react'

function Spinner() {
  return (
    <div
    className='fixed inset-0 flex items-center justify-center bg-black opacity-70 z-[99999]'
    >
      <div className='w-10 h-10 border-gray-300 border-solid rounded-full border-5 border-t-transparent animate-spin'>

      </div>
    </div>
  )
}

export default Spinner
