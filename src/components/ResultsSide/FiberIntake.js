import React, { useState, useEffect } from "react"
import {
  FormCheckbox,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react"
import Store from "../../store"

export default function FiberIntake() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  const [fiberIntake, setFiberIntake] = useState(state.fiberIntake)

  const onFiberIntakeChange = val => {
    setFiberIntake(val)
    setState(state => {
      state.fiberIntake = val
    })
  }

  const getFiberIntakeCalories = () => {
    return state.fiberIntake * 4
  }

  return (
    <div className="mb-4">
      <h5>
        MyfitnessPal counts calories for total carbs. Fiber is not subtracted.
        Therefore it's ok to have these numbers in MFP:
      </h5>
      <h5 className="mb-0">Fiber intake/day:</h5>
      <div className="d-flex align-items-center mb-2">
        <Dropdown
          open={isOpen}
          toggle={() => setOpen(!isOpen)}
          size="sm"
          className="mr-2"
        >
          <DropdownToggle
            outline
            theme="dark"
            // disabled={state.bodyFatValue !== 0.5}
            caret
            style={{ fontSize: "1rem", width: 50 }}
            className="px-0"
          >
            {fiberIntake}
          </DropdownToggle>
          <DropdownMenu>
            {[35, 40, 45, 50, 55].map(n => {
              return (
                <DropdownItem
                  key={n}
                  className=" my-0"
                  onClick={() => onFiberIntakeChange(n)}
                >
                  {n}
                </DropdownItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
        <h5 className="mb-0">* 4 = {getFiberIntakeCalories()} Cal</h5>
      </div>
    </div>
  )
}
