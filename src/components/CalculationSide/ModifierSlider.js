import React, { useState, useEffect } from "react"
import Store from "../../store"

export default function ModifierSlider({
  onChange,
  header,
  max,
  min,
  step,
  defaultVal
}) {
  const onSlideChange = e => {
    onChange(Number(e.target.value))
    // console.log("val from slider", e.target.value)
  }

  return (
    <div className="mt-4">
      <input
        id="typeinp"
        className="w-100"
        type="range"
        min={min}
        max={max}
        value={defaultVal}
        step={step}
        onChange={onSlideChange}
      />
    </div>
  )
}

// function BfDropdown() {
//   const { state, setState } = Store.useStore()
//   const [isOpen, setOpen] = useState(false)
//   const [bfSelected, setBf] = useState(10)

//   const onBodyFatPercentChange = val => {
//     setBf(val)
//     setState(state => {
//       state.bodyFat = val
//     })
//   }

//   return (
//     <Dropdown open={isOpen} toggle={() => setOpen(!isOpen)} className="mr-2">
//       <DropdownToggle
//         outline
//         theme="dark"
//         disabled={state.bodyFatValue !== 0.5}
//         caret
//         className="p-2">
//         {bfSelected}
//       </DropdownToggle>
//       <DropdownMenu>
//         {Array(6)
//           .fill(null)
//           .map((n, i) => {
//             return (
//               <DropdownItem
//                 key={i}
//                 className=" my-0"
//                 onClick={() => onBodyFatPercentChange(i + 5)}>
//                 {i + 5}
//               </DropdownItem>
//             )
//           })}
//       </DropdownMenu>
//     </Dropdown>
//   )
// }

// <h5 className="font-weight-bold">Body Fat</h5>
// <div className="d-flex align-items-center mb-1">
//   <FormRadio
//     // className="pt-4"
//     checked={state.bodyFatValue === 0.5}
//     onChange={() => onBodyFatChange(0.5)}
//   />

//   {state.sexValue === 28 ? (
//     <>
//       <BfDropdown />
//       {` < 10%`}
//     </>
//   ) : (
//     ` < 18%`
//   )}
// </div>

// <FormRadio
//   checked={state.bodyFatValue === 0}
//   onChange={() => onBodyFatChange(0)}>
//   {state.sexValue === 28 ? `~ 15 %` : `~ 23 %`}
// </FormRadio>
// <FormRadio
//   checked={state.bodyFatValue === -0.5}
//   onChange={() => onBodyFatChange(-0.5)}>
//   {state.sexValue === 28 ? `20 % < bf < 24 %` : `28 % < bf < 32 %`}
// </FormRadio>
// <FormRadio
//   checked={state.bodyFatValue === -1}
//   onChange={() => onBodyFatChange(-1)}>
//   {state.sexValue === 28 ? `25 % < bf < 29 %` : `33 % < bf < 37 %`}
// </FormRadio>
// <FormRadio
//   checked={state.bodyFatValue === -1.5}
//   onChange={() => onBodyFatChange(-1.5)}>
//   {state.sexValue === 28 ? `> 29 %` : `> 37 %`}
// </FormRadio>
// <SliderCustomRange />
