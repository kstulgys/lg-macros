// import React, { useState, useEffect } from "react"
// import { FaInfoCircle } from "react-icons/fa"
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button,
//   Popover,
//   PopoverBody,
//   PopoverHeader
// } from "shards-react"
// import Store from "../../store"

// export default function FiberIntake() {
//   const { state, setState } = Store.useStore()
//   const [isOpen, setOpen] = useState(false)
//   const [fiberIntake, setFiberIntake] = useState(state.fiberIntake || 40)

//   const onFiberIntakeChange = val => {
//     setFiberIntake(val)
//     setState(state => {
//       state.fiberIntake = val
//     })
//   }

//   const getFiberIntakeCalories = () => {
//     return state.fiberIntake * 2
//   }

//   return (
//     <div className="mb-4">
//       <div className="d-flex">
//         <h5 className="font-weight-bold">MyfitnessPal setup</h5>
//         <MFPinfo />
//       </div>

//       <h5 className="mb-0">Fiber intake/day:</h5>
//       <div className="d-flex align-items-center mb-2">
//         <Dropdown
//           open={isOpen}
//           toggle={() => setOpen(!isOpen)}
//           size="sm"
//           className="mr-2">
//           <DropdownToggle
//             outline
//             theme="dark"
//             // disabled={state.bodyFatValue !== 0.5}
//             style={{ fontSize: "1rem", width: 50 }}
//             className="px-0">
//             {fiberIntake}
//           </DropdownToggle>
//           <DropdownMenu>
//             {[35, 40, 45, 50, 55].map(n => {
//               return (
//                 <DropdownItem
//                   key={n}
//                   className=" my-0"
//                   onClick={() => onFiberIntakeChange(n)}>
//                   {n}
//                 </DropdownItem>
//               )
//             })}
//           </DropdownMenu>
//         </Dropdown>
//         <h5 className="mb-0"> x 2 = {getFiberIntakeCalories()} Cal</h5>
//       </div>
//     </div>
//   )
// }

// function MFPinfo() {
//   const [isOpen, setOpen] = useState(false)
//   return (
//     <div className="ml-2">
//       <FaInfoCircle
//         size="1.5em"
//         color="#007BFF"
//         id="popover-1"
//         onClick={() => setOpen(!isOpen)}
//       />
//       <Popover
//         placement="bottom"
//         open={isOpen}
//         toggle={() => setOpen(!isOpen)}
//         target="#popover-1">
//         {
//           // <PopoverHeader>Title here</PopoverHeader>
//         }
//         <PopoverBody>
//           MyfitnessPal counts calories for total carbs. Fiber is not subtracted.
//           Therefore it's ok to add calories from fiber to total day calories in
//           MyfitnessPal. Otherwise you will be undereating ~160 cal/day.
//         </PopoverBody>
//       </Popover>
//     </div>
//   )
// }
