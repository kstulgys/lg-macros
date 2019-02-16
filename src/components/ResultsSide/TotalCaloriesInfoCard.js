import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, CardBody, Progress } from 'shards-react'
import Store from '../../store'

export default function TotalCaloriesInfoCard({ day }) {
  const { state, setState } = Store.useStore()
  // const [proteinVal, setProteinVal] = useState(50)
  // const [carbsVal, setCarbsVal] = useState(25)
  // const [fatsVal, setFatsVal] = useState(25)

  // const availableMacroSplitOptions = () =>
  // macroSplitOptions.filter((opt, i) => {
  //   if (macro === 'p') {
  //     return opt < 1 - state.trainingTotalMacroSplit[1]
  //   } else {
  //     return opt < 1 - state.trainingTotalMacroSplit[0]
  //   }
  // })

  const getProteinInfoText = () => {
    if (day === 'training') {
      const gramstext = (
        (state.trainingCalories * state.trainingTotalMacroSplit[0]) /
        4
      ).toFixed(0)
      const percentText = Number(
        (state.trainingTotalMacroSplit[0] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
    if (day === 'rest') {
      const gramstext = (
        (state.restCalories * state.restTotalMacroSplit[0]) /
        4
      ).toFixed(0)
      const percentText = Number(
        (state.restTotalMacroSplit[0] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
  }

  const getCarbsInfoText = () => {
    if (day === 'training') {
      const gramstext = (
        (state.trainingCalories * state.trainingTotalMacroSplit[1]) /
        4
      ).toFixed(0)
      const percentText = Number(
        (state.trainingTotalMacroSplit[1] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
    if (day === 'rest') {
      const gramstext = (
        (state.restCalories * state.restTotalMacroSplit[1]) /
        4
      ).toFixed(0)
      const percentText = Number(
        (state.restTotalMacroSplit[1] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
  }

  const getFatsInfoText = () => {
    if (day === 'training') {
      const gramstext = (
        (state.trainingCalories * state.trainingTotalMacroSplit[2]) /
        9
      ).toFixed(0)
      const percentText = Number(
        (state.trainingTotalMacroSplit[2] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
    if (day === 'rest') {
      const gramstext = (
        (state.restCalories * state.restTotalMacroSplit[2]) /
        9
      ).toFixed(0)
      const percentText = Number(
        (state.restTotalMacroSplit[2] * 100).toFixed(3)
      )
      return `${gramstext} g / ${percentText} %`
    }
  }

  const onProteinChange = e => {
    const { value } = e.target
    const carbsAndFatsSplit = ((1 - value) / 2).toFixed(3)
    if (day === 'training') {
      setState(state => {
        state.trainingTotalMacroSplit[0] = value
        state.trainingTotalMacroSplit[1] = carbsAndFatsSplit
        state.trainingTotalMacroSplit[2] = carbsAndFatsSplit
      })
      return
    }

    if (day === 'rest') {
      setState(state => {
        state.restTotalMacroSplit[0] = value
        state.restTotalMacroSplit[1] = carbsAndFatsSplit
        state.restTotalMacroSplit[2] = carbsAndFatsSplit
      })
      return
    }
  }

  const onCarbsChange = e => {
    const { value } = e.target
    const trainingFatsSplit = (
      1 -
      state.trainingTotalMacroSplit[0] -
      value
    ).toFixed(2)
    const restFatsSplit = (1 - state.restTotalMacroSplit[0] - value).toFixed(2)

    if (day === 'training') {
      setState(state => {
        state.trainingTotalMacroSplit[1] = value
        state.trainingTotalMacroSplit[2] = trainingFatsSplit
      })
      return
    }

    if (day === 'rest') {
      setState(state => {
        state.restTotalMacroSplit[1] = value
        state.restTotalMacroSplit[2] = restFatsSplit
      })
      return
    }
  }

  return (
    <div className="mt-4">
      <h5 className="font-weight-bold d-flex">
        <span>{day === 'training' ? 'Training' : 'Rest'} day</span>
        <span className="ml-auto">
          {day === 'training' ? state.trainingCalories : state.restCalories} Cal
        </span>
      </h5>
      <div className="py-2">
        <Progress multi className="pb-4">
          <Progress
            tag="h5"
            bar
            theme="success"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[0] * 100).toFixed(0)
                : (state.restTotalMacroSplit[0] * 100).toFixed(0)
            }
            className="py-3"
          >
            <h6 className="text-light pt-1">{getProteinInfoText()}</h6>
          </Progress>
          <Progress
            bar
            theme="danger"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[1] * 100).toFixed(0)
                : (state.restTotalMacroSplit[1] * 100).toFixed(0)
            }
            className="py-3"
          >
            <h6 className="text-light pt-1">{getCarbsInfoText()}</h6>
          </Progress>
          <Progress
            bar
            theme="warning"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[2] * 100).toFixed(0)
                : (state.restTotalMacroSplit[2] * 100).toFixed(0)
            }
            className="py-3"
          >
            <h6 className="text-light pt-1">{getFatsInfoText()}</h6>
          </Progress>
        </Progress>
      </div>
      <br />
      <div className="d-flex justify-content-between ">
        <h5 className="">P</h5>
        <input
          className="ml-auto"
          style={{ width: '80%' }}
          list="tickmarks"
          step="0.05"
          min="0.3"
          max="0.6"
          type="range"
          value={
            day === 'training'
              ? state.trainingTotalMacroSplit[0]
              : state.restTotalMacroSplit[0]
          }
          onChange={onProteinChange}
        />
        <datalist id="tickmarks">
          <option value="0.3" />
          <option value="0.35" />
          <option value="0.4" />
          <option value="0.45" />
          <option value="0.5" />
          <option value="0.55" />
          <option value="0.6" />
        </datalist>
        <h5 className="ml-2">%</h5>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <h5 className="">C / F</h5>
        <input
          className="ml-auto"
          style={{ width: '80%' }}
          list="tickmarks-1"
          step="0.025"
          min="0.1"
          max={
            0.9 -
            `${
              day === 'training'
                ? state.trainingTotalMacroSplit[0]
                : state.restTotalMacroSplit[0]
            }`
          }
          type="range"
          value={
            day === 'training'
              ? state.trainingTotalMacroSplit[1]
              : state.restTotalMacroSplit[1]
          }
          onChange={onCarbsChange}
        />
        <datalist id="tickmarks-1">
          <option value="0.1" />
          <option value="0.15" />
          <option value="0.2" />
          <option value="0.25" />
          <option value="0.3" />
          <option value="0.35" />
          <option value="0.4" />
          <option value="0.45" />
          <option value="0.5" />
          <option value="0.55" />
          <option value="0.6" />
        </datalist>
        <h5 className="ml-2">%</h5>
      </div>
      <br />
    </div>
  )
}

{
  /* <Card style={{ width: 370 }}>
<CardBody>
  <h5>Training Day: {state.trainingCalories} Cal</h5>
</CardBody>
</Card> */
}
