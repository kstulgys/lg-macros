import "normalize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import React, { useRef } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import Store from "../store"
import CalculationsSide from "./CalculationSide"
import ResultsSide from "./ResultsSide"
import Navigation from "./Navigation"
import { Card, CardBody, Button } from "shards-react"

export default function Calories() {
  const { state } = Store.useStore()
  const scrollToTopRef = useRef(null)

  const onScrollToTop = () => {
    scrollToTopRef.current.scrollIntoView()
  }

  return (
    <div
      ref={scrollToTopRef}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col-12 col-md-8 ">
          <CalculationsSide />
        </div>
        <div className="col-12 col-md-4 ">
          <ResultsSide />
          <br />
          <div className="px-2 px-md-0">
            <Button
              size="lg"
              block
              theme="dark"
              onClick={() => {
                window.localStorage.clear()
                onScrollToTop()
                window.location.reload()
              }}
            >
              Reset To Defaults
            </Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
