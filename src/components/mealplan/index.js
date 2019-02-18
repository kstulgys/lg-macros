import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, CardBody } from 'shards-react'
import MealsSizeList from './MealsSizeList'
import MealCardList from './MealCardList'

import Store from '../../store'
// import MealCardList from "./MealCardList"
// import TotalCaloriesInfoCard from "./TotalCaloriesInfoCard"

function MealCount() {
  const { state, setState } = Store.useStore()
  // console.log(state.trainingMeals)

  const mealsLength = state.trainingMeals.length

  const onValueChange = e => {
    const { value } = e.target
    const mealSize = Number((1 / Number(value)).toFixed(3))
    const newMealsArray = Array(mealsLength).fill({
      size: mealSize,
      macroSplit: [0.5, 0.25, 0.25]
    })
    // console.log(value, mealSize, newMealsArray)

    setState(state => {
      state.trainingMeals = [...newMealsArray]
    })
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100 m-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="">Meals</h5>
          <h5 className="">{mealsLength}</h5>
        </div>
        <input
          className="w-100"
          step="1"
          min="2"
          max="6"
          type="range"
          defaultValue={mealsLength}
          onChange={onValueChange}
        />
      </div>
    </div>
  )
}

function MealSizeList() {
  const { state, setState } = Store.useStore()

  const onValueChange = e => {
    const { value } = e.target
    console.log(value)
    // setState(state => {
    //   state.trainingMealCount = Number(value)
    // })
  }

  return (
    <div className="d-flex flex-wrap justify-content-center pt-4">
      {state.trainingMeals.map((m, i) => {
        return (
          <div className="w-100 m-4 my-4" key={`${m}-${i}`}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="">Meal-{i + 1}</h5>
              <h5 className="">{Number((m.size * 100).toFixed(1))} %</h5>
            </div>
            <input
              // className="w-100"
              step="0.1"
              min="0.1"
              max="0.8"
              type="range"
              defaultValue={m.size}
              onChange={onValueChange}
            />
          </div>
        )
      })}
    </div>
  )
}

export default function MealPlan() {
  const { state, setState } = Store.useStore()
  // const prevMeals = usePrevious(state.trainingMeals)

  const fixedNum = num => {
    return Number(num.toFixed(2))
  }

  useEffect(() => {
    const mealsTotal = state.trainingMeals.reduce((prev, obj) => {
      return prev + obj.size
    }, 0)

    // console.log(mealsTotal)
    const mealsLength = state.trainingMeals.length
    // console.log("mealsLength", mealsLength)

    const mealsSurplus = fixedNum(mealsTotal - 1)
    const mealsDeficit = fixedNum(1 - mealsTotal)
    const isSurplus = mealsSurplus > 0 ? true : false

    if (mealsSurplus === 0) {
      return
    }

    if (isSurplus) {
      setState(state => {
        state.trainingMeals.pop()
      })
      return
    }

    if (!isSurplus) {
      const newMeal = {
        size: mealsDeficit,
        macroSplit: [0.5, 0.25, 0.25]
      }
      setState(state => {
        state.trainingMeals[mealsLength] = newMeal
      })
      return
    }
  }, [state.trainingMeals])

  return (
    <div className="d-flex row justify-content-center mt-sm-5">
      <h5 className="text-center w-100">Work in progress...</h5>
      <div className="col-12 col-sm-4  my-4">
        <Card>
          <CardBody>
            <MealCount />
            <MealSizeList />
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-sm-6 ">
        <MealCardList />
      </div>
    </div>
  )
}

//  <h5 className="font-weight-bold text-center mt-4">
// Meal sizing (training)
// </h5>
// <MealsSizeList />

// <TotalCaloriesInfoCard />

// function usePrevious(value) {
//   const ref = useRef()
//   useEffect(() => {
//     ref.current = value
//   })
//   return ref.current
// }

// <Button className="mt-4" theme="dark">
//   Generate
//         </Button>
// <AddMeal />
// <RemoveMeal />

// <form method="POST" action="https://formspree.io/karolis.stulgys@gmail.com">
//   <div className="form-group">
//     <input
//       name="email"
//       type="email"
//       className="form-control shadow-lg"
//       placeholder="Your email"
//     />
//   </div>
//   <div className="form-group">
//     <textarea
//       name="message"
//       type="text"
//       className="form-control shadow-lg"
//       rows="4"
//       placeholder="Your message"
//     />
//   </div>
//   <div className="card shadow-lg bg-transparent">
//     <div className="card-body text-center p-2">
//       <button
//         style={{ cursor: "pointer" }}
//         type="submit"
//         className="h5 bg-transparent border-0 text-uppercase font-weight-bold text-white">
//         Submit
//           </button>
//     </div>
//   </div>
// </form>
