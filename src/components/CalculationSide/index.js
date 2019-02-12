import React, { useState, useEffect } from "react"
import { CardBody, Card } from "shards-react"
import Store from "../../store"
import PersonSex from "./PersonSex"
import PersonWeight from "./PersonWeight"
import PersonBodyFat from "./PersonBodyFat"
import PersonMuscular from "./PersonMuscular"
import PersonHeight from "./PersonHeight"
import PersonAge from "./PersonAge"
import PersonActivity from "./PersonActivity"

export default function CalculationsSide() {
  const { state, setState } = Store.useStore()

  return (
    <Card className="">
      <CardBody className="p-3 p-sm-5">
        <div className="row">
          <div className="col pr-0">
            <PersonSex />
            <br />
            <PersonWeight />
            <br />
            <PersonBodyFat />
            <br />
            {state.sexValue === 28 && <PersonMuscular />}
          </div>
          <div className="col pr-0">
            <PersonHeight />
            <br />
            <PersonAge />
            <br />
            <PersonActivity />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
