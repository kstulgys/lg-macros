import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'shards-react'
import SelectMealSize from './SelectMealSize'
import Store from '../../store'
import AddMeal from './AddMeal'
import RemoveMeal from './RemoveMeal'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function MealPlan() {
  const { state, setState } = Store.useStore()
  const prevMeals = usePrevious(state.trainingMeals)

  const makeNumberNormal = num => {
    return Number(num.toFixed(2))
  }

  useEffect(() => {
    // const idxChanged =
    //   prevMeals && prevMeals.findIndex((e, i) => e !== state.trainingMeals[i])
    // console.log('idxChanged', idxChanged)
    const mealsTotal = state.trainingMeals.reduce((prev, next) => {
      return makeNumberNormal(prev + next)
    }, 0)
    const mealsLength = state.trainingMeals.length
    const mealsSurplus = makeNumberNormal(mealsTotal - 1)
    const mealsDeficit = makeNumberNormal(1 - mealsTotal)
    const isSurplus = mealsSurplus > 0 ? true : false

    // console.log('mealsSurplus', mealsSurplus)
    // console.log('mealsDeficit', mealsDeficit)
    // console.log('mealsTotal', mealsTotal)

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
      setState(state => {
        state.trainingMeals[mealsLength] = mealsDeficit
      })
      return
    }
  }, [state.trainingMeals])

  return (
    <div className="text-center">
      <h5 className="font-weight-bold">Meal sizing (training)</h5>
      <div className="d-flex justify-content-center align-items-center">
        {state.trainingMeals.map((m, i) => (
          <div key={`${i}-${m}`}>
            <SelectMealSize size={m} index={i} />
          </div>
        ))}
      </div>
      <Button className="mt-4" theme="dark">
        Generate
      </Button>
    </div>
  )
}

// <AddMeal />
// <RemoveMeal />
