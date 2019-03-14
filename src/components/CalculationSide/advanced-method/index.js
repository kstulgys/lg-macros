import React, { useState, useEffect } from "react"
import { CardBody, Card, CardHeader, FormRadio } from "shards-react"
import Store from "../../../store"

import SelectActivityLevel from "./SelectActivityLevel"
import ModifierSlider from "../ModifierSlider"
import TrainingMinutes from "./TrainingMinutes"
// import TrainingAndRestCal from "./TrainingAndRestCal"

export default function AdvancedMethod() {
  const { state, setState } = Store.useStore()

  return (
    <>
      <div className="my-5">
        <SelectActivityLevel />
      </div>
      <div className="my-5">
        <TrainingMinutes />
      </div>
    </>
  )
}
