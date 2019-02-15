import React, { useEffect, useState, useRef } from "react"
import { Button, Card, CardBody } from "shards-react"
import MealsSizeList from "./MealsSizeList"
import Store from "../../store"

export default function TotalCaloriesInfoCard() {
  const { state, setState } = Store.useStore()

  return (
    <Card style={{ width: 370 }}>
      <CardBody>
        <h5>{state.trainingCalories} Cal</h5>
        <h5>{state.restCalories} Cal</h5>
      </CardBody>
    </Card>
  )
}
