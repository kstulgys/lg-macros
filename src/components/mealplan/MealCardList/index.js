import React, { useState, useEffect } from 'react'
import MealCard from './MealCard'
import {} from 'shards-react'
import Store from '../../../store'

export default function MealCardList() {
  const { state, setState } = Store.useStore()

  return (
    <div className="d-flex flex-wrap w-100 my-4">
      {state.trainingMeals.map((m, i) => {
        return (
          <div key={`${i}-${m}`} className="w-100">
            <MealCard size={m.size} />
          </div>
        )
      })}
    </div>
  )
}
