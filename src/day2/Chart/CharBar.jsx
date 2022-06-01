import React from 'react'

const ChartBar = (props) => {
  let fillHeight = '0%'
  if (props.maxValue > 0) {
    fillHeight = Math.floor((props.value / props.maxValue) * 100) + '%'
    if (props.value) {
      console.log(props.label)
      console.log(fillHeight)
    }
  }
  return (
    <div>
      <div className='bg-blue-100 rounded-lg w-3 h-[100px] relative'>
        <div
          className={`transition-all delay-300 ease-linear w-full bg-blue-700 rounded-lg absolute bottom-0 `}
          style={{ height: fillHeight }}></div>
      </div>
      <span className='font-bold text-[10px]'>{props.label}</span>
    </div>
  )
}

export default ChartBar
