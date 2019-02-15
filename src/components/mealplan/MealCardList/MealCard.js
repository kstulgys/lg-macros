import React from "react"
import { CardBody, Card, Button, CardHeader } from "shards-react"
import SelectIngredient from "./SelectIngredient"
import Store from "../../../store"

export default function MealCard({ size }) {
  const { state, setState } = Store.useStore()

  return (
    <Card style={{ width: 370 }} className="m-2">
      <CardHeader className="text-center">
        <h5 className="m-0">{Math.round(size * 100)} %</h5>
      </CardHeader>
      <CardBody className="">
        <h5 className="d-flex align-items-center">
          <span style={{ width: "1.25rem" }}>P</span>
          <SelectIngredient /> <span>x 2.5</span>
          <span className="ml-auto">250 g</span>
        </h5>

        <h5 className="d-flex align-items-center">
          <span style={{ width: "1.25rem" }}>C</span>
          <SelectIngredient /> <span>x 2.5</span>
          <span className="ml-auto">250 g</span>
        </h5>

        <h5 className="d-flex align-items-center">
          <span style={{ width: "1.25rem" }}>F</span>
          <SelectIngredient /> <span>x 2.5</span>
          <span className="ml-auto">250 g</span>
        </h5>

        <h5 className="d-flex align-items-center">
          <span style={{ width: "1.25rem" }}>G</span>
          <SelectIngredient /> <span>x 2.5</span>
          <span className="ml-auto">250 g</span>
        </h5>
        <h5 className="d-flex align-items-center">
          <span style={{ width: "1.25rem" }}>Fr</span>
          <SelectIngredient /> <span>x 2.5</span>
          <span className="ml-auto">250 g</span>
        </h5>
      </CardBody>
      <Button size="lg" theme="light">
        Get quantities
      </Button>
    </Card>
  )
}

// <Card className="w-50">
//   <CardBody className="">
//     <div className="row">
//       <div className="col-1">
//         <h5>P</h5>
//       </div>
//       <div className="col">
//         <SelectIngredient />
//       </div>
//     </div>
//   </CardBody>
// </Card>
