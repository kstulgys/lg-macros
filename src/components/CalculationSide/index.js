import React, { useState, useEffect } from 'react'
import { CardBody, Card } from 'shards-react'
import Store from '../../store'
import PersonSex from './PersonSex'
import PersonWeight from './PersonWeight'
import PersonBodyFat from './PersonBodyFat'
import PersonMuscular from './PersonMuscular'
import PersonHeight from './PersonHeight'
import PersonAge from './PersonAge'
import PersonActivity from './PersonActivity'

export default function CalculationsSide() {
  const { state, setState } = Store.useStore()

  return (
    <Card>
      <CardBody className="mr-4 m-sm-4">
        <div className="mb-5">
          <PersonSex />
        </div>
        <div className="my-5">
          <PersonAge />
        </div>

        <div className="my-5">
          <PersonHeight />
        </div>

        <div className="my-5">
          <PersonWeight />
        </div>

        <div className="my-5">
          <PersonBodyFat />
        </div>

        <div className="my-5">
          <PersonActivity />
        </div>

        <div className="mt-5 mb-3">
          {state.gender === 'Male' && <PersonMuscular />}
        </div>
      </CardBody>
    </Card>
  )
}
