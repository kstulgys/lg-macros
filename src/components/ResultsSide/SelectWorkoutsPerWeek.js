import React, { useState, useEffect } from "react"
import { FaInfoCircle } from "react-icons/fa"
// import { ICON_NAME } from "react-icons/go";
import { Modal, ModalHeader, ModalBody, FormCheckbox } from "shards-react"
import Store from "../../store"

export default function SelectWorkoutsPerWeek() {
  const { state, setState } = Store.useStore()
  const [open, onToggle] = useState(false)

  const onWorkoutsChange = e => {
    const { value } = e.target
    setState(state => {
      state.workoutsPerWeek = Number(value)
    })
  }

  useEffect(
    () => {
      state.calcMethod === 0 &&
        setState(state => {
          state.workoutsPerWeek = 3
        })
    },
    [state.calcMethod]
  )

  return (
    <div className="my-4">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span className="mr-2">Training / wk</span>
        <span className="ml-auto">{state.workoutsPerWeek}</span>
      </h5>
      {state.calcMethod === 1 && (
        <input
          className="m-0 p-0"
          type="range"
          min="0"
          max="7"
          step="1"
          value={state.workoutsPerWeek}
          onChange={onWorkoutsChange}
        />
      )}
    </div>
  )
}

// <FaInfoCircle onClick={() => onToggle(!open)} />
//   <Modal open={open} toggle={() => onToggle(!open)}>
//     <ModalBody>
//       <p>
//         Training day calorie intake = (Target average daily calorie
//         intake*7)/ (Number of training days per week+(Number of rest days
//         per week)*(1-(chosen percentage calorie difference between
//         training and rest days)/100))
//             </p>

//       <p>
//         Rest day calorie intake = ((Target average daily calorie
//         intake*7)/ (Number of training days per week+(Number of rest days
//         per week)*(1-(chosen percentage calorie difference between
//         training and rest days)/100)))*(1-chosen percentage calorie
//         difference between training and rest days/100)
//             </p>
//     </ModalBody>
//   </Modal>
