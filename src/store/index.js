import React, { useMemo, useContext, createContext, useState } from "react"
import { useImmer } from "use-immer"
// import { withRouter, BrowserRouter } from 'react-router-dom';
const initialState = {
  weight: 80.5,
  height: 1.82,
  weightUnit: "kg",
  heightUnit: "m",
  sexValue: 28,
  heightValue: 0,
  bodyFatValue: 0,
  ageValue: 0,
  muscularValue: 0,
  stepsValue: 0
}

function makeStore() {
  const Context = createContext()
  const stateFromStorage = () =>
    JSON.parse(localStorage.getItem("state")) || initialState

  const Provider = ({ children }) => {
    const [state, setState] = useImmer(stateFromStorage)

    let contextValue = useMemo(
      () => localStorage.setItem("state", JSON.stringify(state)),
      [state]
    )
    contextValue = {
      state,
      setState
    }
    // console.log(contextValue);
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
  }

  const useStore = () => useContext(Context)

  return {
    Provider,
    useStore
  }
}

export default makeStore()
