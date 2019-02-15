import React, { useState, useEffect } from "react"
import MealCard from "./MealCard"
import {} from "shards-react"
import Store from "../../../store"

export default function MealCardList() {
  const { state, setState } = Store.useStore()

  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      {state.trainingMeals.map((m, i) => {
        return (
          <div key={`${i}-${m}`}>
            <MealCard size={m} />
          </div>
        )
      })}
    </div>
  )
}
