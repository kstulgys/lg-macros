import React, { useState, useEffect } from "react"
import Store from "../../store"

export default function TrainingAndRestCal() {
  const { state, setState } = Store.useStore()

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        BMR
        <span className="ml-auto"> {state.bmr} Cal</span>
      </h5>
      <h5 className="font-weight-bold d-flex">
        TDEE (T)<span className="ml-auto"> {state.baseTrainingCal} Cal</span>
      </h5>
      <h5 className="font-weight-bold d-flex">
        TDEE (R)
        <span className="ml-auto">{state.baseRestCal} Cal</span>
      </h5>
    </>
  )
}
