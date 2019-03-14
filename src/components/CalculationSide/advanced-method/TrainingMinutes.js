import React, { useState, useEffect } from "react"
import {
  CardBody,
  Card,
  CardHeader,
  FormRadio,
  Popover,
  PopoverHeader,
  PopoverBody
} from "shards-react"
import Store from "../../../store"
import { FaInfoCircle } from "react-icons/fa"

import SelectActivityLevel from "./SelectActivityLevel"
import ModifierSlider from "../ModifierSlider"

export default function TrainingMinuites() {
  const { state, setState } = Store.useStore()

  const onWeightsMinChange = val => {
    setState(state => {
      state.weightsMinutes = val
      state.weightsCal = Math.round(state.weightsMinutes * 8.8)
    })
  }

  const onCardioMinChange = val => {
    setState(state => {
      state.cardioMinutes = val
      state.cardioCal = Math.round(state.cardioMinutes * 6)
    })
  }

  return (
    <>
      <div className="my-5">
        <h5 className="font-weight-bold d-flex align-items-center">
          Weights
          <PopupInfo />
          <span className="ml-auto">{state.weightsMinutes} min</span>
        </h5>
        <ModifierSlider
          onChange={onWeightsMinChange}
          max={60}
          min={0}
          step={1}
          defaultVal={state.weightsMinutes}
        />
      </div>
      <div className="my-5">
        <h5 className="font-weight-bold d-flex">
          Cardio
          <span className="ml-auto">{state.cardioMinutes} min</span>
        </h5>
        <ModifierSlider
          onChange={onCardioMinChange}
          max={60}
          min={0}
          step={1}
          defaultVal={state.cardioMinutes}
        />
      </div>
    </>
  )
}

function PopupInfo() {
  const [open, onToggle] = useState(false)

  return (
    <div className="ml-2">
      <FaInfoCircle id="popover-1" onClick={() => onToggle(!open)} />

      <Popover
        placement="bottom"
        open={open}
        toggle={() => onToggle(!open)}
        target="#popover-1">
        <PopoverBody>
          Actual time spent lifting weights. Resting does not count.
        </PopoverBody>
      </Popover>
    </div>
  )
}
