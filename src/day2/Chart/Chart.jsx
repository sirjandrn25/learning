import React from 'react'
import ChartBar from './CharBar'
import Card from '../UI/Card'

const Chart = (props) => {
  const value_list = props.dataPoints.map((dataPoint) => dataPoint.value)
  const maxValue = Math.max(...value_list)
  return (
    <Card className='bg-red-100 mb-3 py-2 justify-items-center w-full grid grid-cols-12 gap-2 '>
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar value={dataPoint.value} label={dataPoint.label} maxValue={maxValue} key={dataPoint.label} />
      })}
      {/* {Object.keys(months).map((key) => {
        const [total_amount, total_times] = getTotalExpensesInMonth(months[key])
        return <ExpenseBar key={key} month={key} total_amount={total_amount} total_times={total_times} />
      })} */}
    </Card>
  )
}

export default Chart
