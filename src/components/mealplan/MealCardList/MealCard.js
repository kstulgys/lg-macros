import React, { useState } from 'react'
import { CardBody, Card, Button, CardHeader } from 'shards-react'
import SelectIngredient from './SelectIngredient'
import Store from '../../../store'

export default function MealCard({ size }) {
  const { state, setState } = Store.useStore()
  const [value, setValue] = useState(0.25)

  const onValueChange = e => {
    const { value } = e.target
    // const grams = Math.round
    setValue(value)
  }

  return (
    <Card className="mb-4">
      <CardHeader className="text-center">
        <h5 className="m-0">{Math.round(size * 100)} %</h5>
      </CardHeader>
      <CardBody className="">
        <h5 className="d-flex justify-content-between align-items-center">
          <span style={{ minWidth: '1.5rem' }}>P</span>
          <SelectIngredient />
          <div className="d-flex w-25">
            <span className="ml-auto">{Math.round(value * 1000)} g</span>
          </div>
        </h5>
        <input
          className="w-100"
          step="0.005"
          min="0.025"
          max="1"
          type="range"
          defaultValue={value}
          onChange={onValueChange}
        />
      </CardBody>
    </Card>
  )
}

// <Button size="lg" theme="light">
// Get quantities
// </Button>

// <Card className="w-50">
//   <CardBody className="">
//     <div className="row">
//       <div className="col-1">
//         <h5>P</h5>
//       </div>
//       <div className="col">
//         <SelectIngredient />
//       </div>
//     </div>
//   </CardBody>
// </Card>

// function MealCount() {
//   const { state, setState } = Store.useStore()
//   console.log(state.trainingMeals)

//   const mealsLength = state.trainingMeals.length

//   const onValueChange = e => {
//     const { value } = e.target
//     const mealSize = Number((1 / Number(value)).toFixed(3))
//     const newMealsArray = Array(mealsLength).fill({
//       size: mealSize,
//       macroSplit: [0.5, 0.25, 0.25]
//     })
//     // console.log(value, mealSize, newMealsArray)

//     setState(state => {
//       state.trainingMeals = [...newMealsArray]
//     })
//   }

//   return (
//     <div className="d-flex justify-content-center">
//       <div className="w-100 m-4">
//         <div className="d-flex justify-content-between align-items-center">
//           <h5 className="">Meals</h5>
//           <h5 className="">{mealsLength}</h5>
//         </div>
//         <input
//           className="w-100"
//           step="1"
//           min="2"
//           max="6"
//           type="range"
//           defaultValue={mealsLength}
//           onChange={onValueChange}
//         />
//       </div>
//     </div>
//   )
// }
