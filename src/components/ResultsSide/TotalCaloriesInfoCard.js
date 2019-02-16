import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, CardBody, Progress } from 'shards-react'
import Store from '../../store'

export default function TotalCaloriesInfoCard({ day }) {
  const { state, setState } = Store.useStore()
  const [maxCarbsRange, setMaxCarbsRange] = useState(() => {
    if (day === 'training') {
      return (0.95 - state.trainingTotalMacroSplit[0]).toFixed(3)
    }
    if (day === 'rest') {
      return (0.95 - state.restTotalMacroSplit[0]).toFixed(3)
    }
  })

  const getProteinInfoText = () => {
    if (day === 'training') {
      const percentText = Number(
        (state.trainingTotalMacroSplit[0] * 100).toFixed(1)
      )
      return `${state.trainingProteinGrams} g / ${percentText} %`
    }
    if (day === 'rest') {
      const percentText = Number(
        (state.restTotalMacroSplit[0] * 100).toFixed(1)
      )
      return `${state.restProteinGrams} g / ${percentText} %`
    }
  }

  const getCarbsInfoText = () => {
    if (day === 'training') {
      const percentText = Number(
        (state.trainingTotalMacroSplit[1] * 100).toFixed(1)
      )
      return `${state.trainingCarbsGrams} g / ${percentText} %`
    }
    if (day === 'rest') {
      const percentText = Number(
        (state.restTotalMacroSplit[1] * 100).toFixed(1)
      )
      return `${state.restCarbsGrams} g / ${percentText} %`
    }
  }

  const getFatsInfoText = () => {
    if (day === 'training') {
      const percentText = Number(
        (state.trainingTotalMacroSplit[2] * 100).toFixed(1)
      )
      return `${state.trainingFatsGrams} g / ${percentText} %`
    }
    if (day === 'rest') {
      const percentText = Number(
        (state.restTotalMacroSplit[2] * 100).toFixed(1)
      )
      return `${state.restFatsGrams} g / ${percentText} %`
    }
  }

  const onProteinChange = e => {
    const { value } = e.target
    const carbsAndFatsSplit = Number(((1 - Number(value)) / 2).toFixed(2))
    // console.log(carbsAndFatsSplit)
    if (day === 'training') {
      setState(state => {
        state.trainingTotalMacroSplit[0] = value
        state.trainingTotalMacroSplit[1] = carbsAndFatsSplit
        state.trainingTotalMacroSplit[2] = carbsAndFatsSplit
      })
      setMaxCarbsRange((0.95 - value).toFixed(3))
      return
    }

    if (day === 'rest') {
      setState(state => {
        state.restTotalMacroSplit[0] = value
        state.restTotalMacroSplit[1] = carbsAndFatsSplit
        state.restTotalMacroSplit[2] = carbsAndFatsSplit
      })
      setMaxCarbsRange((0.95 - value).toFixed(3))
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
    <div className="">
      <h5 className="font-weight-bold d-flex">
        <span>{day === 'training' ? 'Training' : 'Rest'} day</span>
        <span className="ml-auto">
          {day === 'training' ? state.trainingCalories : state.restCalories} Cal
        </span>
      </h5>
      <div className="mt-4">
        <Progress multi className="pb-5 pb-sm-4">
          <Progress
            bar
            theme="success"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[0] * 100).toFixed(0)
                : (state.restTotalMacroSplit[0] * 100).toFixed(0)
            }
            className="py-4 py-sm-3"
          >
            <h6 className="text-light pt-2 pt-sm-1">{getProteinInfoText()}</h6>
          </Progress>
          <Progress
            bar
            theme="danger"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[1] * 100).toFixed(0)
                : (state.restTotalMacroSplit[1] * 100).toFixed(0)
            }
            className="py-4 py-sm-3"
          >
            <h6 className="text-light pt-2 pt-sm-1">{getCarbsInfoText()}</h6>
          </Progress>
          <Progress
            bar
            theme="warning"
            value={
              day === 'training'
                ? (state.trainingTotalMacroSplit[2] * 100).toFixed(0)
                : (state.restTotalMacroSplit[2] * 100).toFixed(0)
            }
            className="py-4 py-sm-3"
          >
            <h6 className="text-light pt-2 pt-sm-1 ">{getFatsInfoText()}</h6>
          </Progress>
        </Progress>
      </div>
      <br />

      <div className="d-flex justify-content-between align-items-center">
        <h5 className="m-0">P</h5>
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

        <h5 className="m-0 ml-2">%</h5>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5 className="m-0">C / F</h5>
        <input
          className="ml-auto"
          style={{ width: '80%' }}
          list="tickmarks-1"
          step="0.025"
          min="0.05"
          max={maxCarbsRange}
          type="range"
          value={
            day === 'training'
              ? state.trainingTotalMacroSplit[1]
              : state.restTotalMacroSplit[1]
          }
          onChange={onCarbsChange}
        />

        <h5 className="m-0 ml-2 text-center">%</h5>
      </div>
    </div>
  )
}
