import React, { useState, useEffect } from "react"
import { CardBody, Card, CardHeader, FormRadio } from "shards-react"
import Store from "../../store"
import PersonSex from "./PersonSex"
import PersonWeight from "./PersonWeight"
import PersonBodyFat from "./PersonBodyFat"
import PersonMuscular from "./PersonMuscular"
import PersonHeight from "./PersonHeight"
import PersonAge from "./PersonAge"
import PersonActivity from "./PersonActivity"
import AdvancedMethod from "./advanced-method"

export default function CalculationsSide() {
  const { state, setState } = Store.useStore()
  // console.log(state.calcMethod)
  const onCalcMethodChange = val => {
    setState(state => {
      state.calcMethod = val
    })
  }

  return (
    <Card>
      <CardBody className="mr-4 m-sm-4 mb-0 pb-0">
        <div className="mt-0 pt-0">
          <PersonWeight />
        </div>
        <div className="my-5">
          <PersonBodyFat />
        </div>
        <h5 className="font-weight-bold d-flex">
          <span>Calculation Method</span>
        </h5>
        <h6>
          <FormRadio
            name="0"
            checked={!state.calcMethod}
            onChange={() => onCalcMethodChange(0)}>
            Lean Gains
          </FormRadio>
        </h6>
        <h6>
          <FormRadio
            name="1"
            checked={state.calcMethod}
            onChange={() => onCalcMethodChange(1)}>
            Advanced Nutrition and Human Metabolism, 5th Edition
          </FormRadio>
        </h6>
        {!state.calcMethod ? <LGMethod /> : <AdvancedMethod />}
      </CardBody>
    </Card>
  )
}

function LGMethod() {
  const { state, setState } = Store.useStore()

  return (
    <>
      <div className="my-5">
        <PersonSex />
      </div>
      <div className="my-5">
        <PersonAge />
      </div>

      <div className="my-5">
        <PersonHeight />
      </div>

      <div className="my-5">
        <PersonActivity />
      </div>

      <div className="mt-5 mb-3">
        {state.gender === "Male" && <PersonMuscular />}
      </div>
    </>
  )
}
