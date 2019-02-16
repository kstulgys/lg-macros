import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import './styles.css'
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
  // console.log(state)

  return (
    <div className="bg-light" style={{ overflowX: 'hidden', height: '100vh' }}>
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
