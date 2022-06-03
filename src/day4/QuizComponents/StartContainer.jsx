import React from 'react'
import Card from '../UI/Card'

const StartContainer = () => {
  return (
    <Card className='h-[200px] w-[400px] flex justify-center items-center bg-black/40'>
      <button className='bg-blue-400 text-white font-bold text-[24px] hover:bg-blue-600 border-2 border-teal-300 rounded-lg px-7 py-1'>
        Start
      </button>
    </Card>
  )
}

export default StartContainer
