// import "./styles.css"
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Store from './store'
import CalculationsSide from './components/CalculationSide'
import ResultsSide from './components/ResultsSide'
import Navigation from './components/Navigation'
import Calories from './components/Calories'
import MealPlan from './components/mealplan'
import { Card, CardBody, Button } from 'shards-react'

function App() {
  const { state } = Store.useStore()
  console.log(state)

  return (
    <div
      className="bg-light container-fluid px-0"
      style={{ overflowX: 'hidden', height: '100vh' }}>
      <Navigation />
      <Route exact path="/" component={Calories} />
      <Route path="/meals" component={MealPlan} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Store.Provider>
      <App />
    </Store.Provider>
  </BrowserRouter>,
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
