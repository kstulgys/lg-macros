import "normalize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import React from "react"
import ReactDOM from "react-dom"
import Store from "./store"
import CalculationsSide from "./components/CalculationSide"
import ResultsSide from "./components/ResultsSide"
// import Footer from "./components/Footer"
import { Card, CardBody, Button } from "shards-react"
// import "./styles.css"

function App() {
  const { state } = Store.useStore()
  // console.log(state)
  return (
    <div className="bg-light" style={{ overflowX: "hidden" }}>
      <div
        className="container px-0"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
          // height: "100vh"
        }}
      >
        <div className="row">
          <div className="col-12 col-md-8 ">
            <br />
            <CalculationsSide />
          </div>
          <div className="col-12 col-md-4 ">
            <br />
            <ResultsSide />
            <br />
            <Button
              size="lg"
              block
              theme="dark"
              onClick={() => {
                window.scrollTop = 0
                window.localStorage.clear()
                window.location.reload()
              }}
            >
              Reset To Defaults
            </Button>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Store.Provider>
    <App />
  </Store.Provider>,
  rootElement
)

//     <h1>Multiplyier</h1>
//   <h2>Steps > 6000/day => +0.5</h2>
//   <h2>{`BF < 10% => + 0.5`} </h2>
//   <h2>{`FFMI > 22 => + 0.5`} </h2>
//   <h2>{`Tall > 22 => + 1.0`} </h2>
//   <h2>{`28 + 0.5 + 0.5 + 0.5 + 1.0 = 30.5`} </h2>
// </div>
// <br />
// <div>
//   <h1>Calories</h1>
//   <h2>{`Base => 92kg * 30.5 - 500 = 2306 Cal`} </h2>
//   <h2>{`T => 2306 * 1.075 = ${Math.floor(2306 * 1.075)} Cal`} </h2>
//   <h2>{`R => 2306 * 0.925 = ${Math.floor(2306 * 0.925)} Cal`} </h2>
// </div>
