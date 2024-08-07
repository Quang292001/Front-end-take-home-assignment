import React from 'react'

const SelectButton = ({ activeButton, setActiveButton }) => {
  const buttonClass = (buttonName) => {
    return activeButton === buttonName
      ? 'h-11 rounded-full bg-gray-700 text-white flex items-center justify-center'
      : 'h-11 rounded-full bg-white text-black flex items-center justify-center'
  }

  return (
    <div className="flex space-x-4 pb-2">
      <button
        className={`w-20 ${buttonClass('All')}`}
        type="button"
        onClick={() => setActiveButton('All')}
      >
        All
      </button>
      <button
        className={`w-28 ${buttonClass('Pending')}`}
        type="button"
        onClick={() => setActiveButton('Pending')}
      >
        Pending
      </button>
      <button
        className={`w-32 ${buttonClass('Completed')}`}
        type="button"
        onClick={() => setActiveButton('Completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default SelectButton
