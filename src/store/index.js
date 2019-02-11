import React, { useMemo, useContext, createContext, useState } from "react"
import { useImmer } from "use-immer"
// import { withRouter, BrowserRouter } from 'react-router-dom';
const initialState = {
  weight: 80.5 || "",
  height: 1.82,
  weightUnit: "kg",
  heightUnit: "m",
  sexValue: 28,
  heightValue: 0,
  bodyFatValue: 0,
  ageValue: 0,
  muscularValue: 0,
  stepsValue: 0,
  fiberIntake: 40,
  calDeficit: 500,
  dsvsbv: "sdvsdfb"
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
