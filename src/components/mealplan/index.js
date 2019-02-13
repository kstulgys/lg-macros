import React from 'react'
import { Button } from 'shards-react'
import SelectMealSize from './SelectMealSize'
import Store from '../../store'
import AddMeal from './AddMeal'
import RemoveMeal from './RemoveMeal'

export default function MealPlan() {
  const { state } = Store.useStore()
  console.log('state.trainingMeals', state.trainingMeals)
  return (
    <div className="text-center">
      <h5 className="font-weight-bold">Meal size (training)</h5>
      <div className="d-flex justify-content-center align-items-center">
        <AddMeal />
        {state.trainingMeals.map((m, i) => (
          <div key={`${i}-${m}`}>
            <SelectMealSize size={m} index={i} />
          </div>
        ))}
        <RemoveMeal />
      </div>
      <Button className="mt-4" theme="dark">
        Generate
      </Button>
    </div>
  )
}
