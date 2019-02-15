import React from "react"
import { FaRegPlusSquare } from "react-icons/fa"
import Store from "../../../store"
import SelectMacroSplit from "./SelectMacroSplit"
import SelectMealSize from "./SelectMealSize"

export default function MealsSizeList() {
  const { state, setState } = Store.useStore()

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center row">
      {state.trainingMeals.map((item, i) => (
        <div
          key={`${i}-${item && item.size}`}
          className="col-11 col-md-4 col-lg-2 w-100 m-3 p-0"
        >
          <div className="w-100 mb-1">
            <SelectMealSize size={item && item.size} index={i} />
          </div>

          <div className="row d-flex align-items-center mx-0 my-1">
            <div className="col p-0">
              <SelectMacroSplit
                mealIndex={i}
                macroLabel="P"
                split={item && item.macroSplit && item.macroSplit[0]}
              />
            </div>

            <div className="col p-0">
              <SelectMacroSplit
                mealIndex={i}
                macroLabel="C"
                split={item && item.macroSplit && item.macroSplit[1]}
              />
            </div>

            <div className="col p-0">
              <SelectMacroSplit
                mealIndex={i}
                macroLabel="F"
                split={item && item.macroSplit && item.macroSplit[2]}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// <div className="d-flex">
//   {item.macroSplit &&
//     item.macroSplit.map((split, j) => {
//       return (
//         <div key={`${i}-${split}-${j}`}>
//           <SelectMacroSplit
//             label={j === 0 ? "P" : j === 1 ? "C" : "F"}
//             macroSplit={split}
//             mealIndex={i}
//             index={j}
//           />
//         </div>
//       )
//     })}
// </div>

// <div className="m-3">
//   <SelectMealSize size={size} />
//   <div className="d-flex">
//     <SelectMacroSplit />
//     <SelectMacroSplit />
//     <SelectMacroSplit />
//   </div>
// </div>
