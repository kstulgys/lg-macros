import React, { useMemo, useContext, createContext, useState } from "react"
import { useImmer } from "use-immer"
// import { withRouter, BrowserRouter } from 'react-router-dom';
const initialState = {
  weight: 80.5,
  height: 1.82,
  bodyFat: 15,
  age: 30,
  gender: "Male",
  steps: 6250,
  weightUnit: "kg",
  heightUnit: "m",
  sexValue: 28,
  heightValue: 0,
  bodyFatValue: 0,
  ageValue: 0,
  muscularValue: 0,
  stepsValue: 0.5,
  fiberIntake: 40,
  calDeficit: -500,
  calDeficitPercent: 0.2,
  calSplit: 0.2,
  workoutsPerWeek: 3,
  useWorkoutsPerWeek: false,
  trainingTotalCalSplit: [0.2, 0.2, 0.6],
  restTotalCalSplit: [0.2, 0.2, 0.6],
  trainingTotalMacroSplit: [0.5, 0.25, 0.25],
  restTotalMacroSplit: [0.5, 0.25, 0.25],
  trainingMeals: [
    { size: 0.2, macroSplit: [0.5, 0.25, 0.25] },
    { size: 0.2, macroSplit: [0.5, 0.25, 0.25] },
    { size: 0.6, macroSplit: [0.5, 0.25, 0.25] }
  ]
}

const getLocalStorageState = () =>
  JSON.parse(localStorage.getItem("state")) || initialState

const setStateToLocalStorage = state =>
  localStorage.setItem("state", JSON.stringify(state))

const clearLocalStorage = () => {
  const localStorageState = getLocalStorageState()
  let newState = localStorageState
  Object.keys(initialState).map(key => {
    if (!localStorageState.hasOwnProperty(key)) {
      // console.log(key)
      // console.log(initialState[key])
      newState[key] = initialState[key]
      setStateToLocalStorage(newState)
      // window.localStorage.clear()
    }
    return null
  })
}

function makeStore() {
  clearLocalStorage()
  const Context = createContext()

  const useStore = () => useContext(Context)

  const Provider = ({ children }) => {
    const [state, setState] = useImmer(getLocalStorageState)

    useMemo(() => setStateToLocalStorage(state), [state])
    const contextValue = {
      state,
      setState
    }

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
  }

  return {
    Provider,
    useStore
  }
}

export default makeStore()
