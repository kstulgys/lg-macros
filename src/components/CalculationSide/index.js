import React, { useState, useEffect } from "react"
import { CardBody, Card } from "shards-react"
import Store from "../../store"
import PersonSex from "./PersonSex"
import PersonWeight from "./PersonWeight"
import PersonBodyFat from "./PersonBodyFat"
import PersonMuscular from "./PersonMuscular"
import PersonHeight from "./PersonHeight"
import PersonAge from "./PersonAge"
import PersonActivity from "./PersonActivity"

export default function CalculationsSide() {
  const { state, setState } = Store.useStore()

  return (
    <Card className="">
      <CardBody className="p-4 p-sm-4">
        <div className="row">
          <div className="col pr-0 pr-sm-3">
            <PersonSex />
            <br />
            <PersonWeight />
            <br />
            <PersonBodyFat />
            <br />
            {state.sexValue === 28 && <PersonMuscular />}
          </div>
          <div className="col pl-0 pl-sm-3 pt-sm-4 pt-md-0 ">
            <PersonHeight />
            <br />
            <PersonAge />
            <br />
            <PersonActivity />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

// function ToggleButton({ text, sex, onSexChange }) {
//   // const [toggled, setToggle] = useState(true);

//   return (
//     <>
//       <FormCheckbox checked={sex === text} onChange={onSexChange}>
//         {text}
//       </FormCheckbox>
//     </>
//   );
// }
// <ToggleButton text="Male" onSexChange={onSexChange} sex={sex} />
//   <ToggleButton text="Female" onSexChange={onSexChange} sex={sex} />
// <h1>Tall</h1>
//   <FormCheckbox
//     toggle
//     checked={toggled}
//     onChange={() => setToggle(!toggled)}
//   >
//     Tall > 185 centimeters (6 feet, 1 inch)
//       </FormCheckbox>
