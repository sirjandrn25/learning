import React from 'react'

const rangeOfDate = (start, end) => {
  let arr = []
  for (let i = end; i >= start; i--) {
    arr.push(i)
  }
  return arr
}

const FilterExpenses = () => {
  return (
    <div className='w-full mb-3 p-5 flex justify-between items-center'>
      <span className='text-gray-300 font-bold capitalize'>Filter by Date</span>
      <select name='' id='' className='px-3 py-1 rounded-lg focus:outline-sky-400'>
        {rangeOfDate(2010, 2022).map((date) => (
          <option value={date}>{date}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterExpenses
