import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "./store"
import PersonSex from "./components/PersonSex"
import PersonWeight from "./components/PersonWeight"
import PersonBodyFat from "./components/PersonBodyFat"
import PersonMuscular from "./components/PersonMuscular"
import PersonHeight from "./components/PersonHeight"
import PersonAge from "./components/PersonAge"
import PersonActivity from "./components/PersonActivity"

export default function App() {
  const { state, setState } = Store.useStore()

  return (
    <div>
      <PersonSex />
      <br />
      <PersonWeight />
      <br />
      <PersonBodyFat />
      <br />
      <PersonMuscular />
      <br />
      <PersonHeight />
      <br />
      <PersonAge />
      <br />
      <PersonActivity />
    </div>
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
