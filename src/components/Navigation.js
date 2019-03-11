import React, { useState } from "react"
import { Button } from "shards-react"
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  withRouter
} from "react-router-dom"

function Navigation({ location }) {
  const [collapseOpen, toggleColapse] = useState(false)
  return (
    <div className="d-flex justify-content-center w-100 py-4">
      <Link to="/">
        <Button
          size="lg"
          style={{ width: 125 }}
          theme={location.pathname !== "/meals" ? "dark" : "light"}
          className="mr-3">
          Calories
        </Button>
      </Link>
    </div>
  )
}

export default withRouter(Navigation)

// < Link to = "/meals" >
//   <Button
//     style={{ width: 125 }}
//     size="lg"
//     theme={location.pathname === '/meals' ? 'dark' : 'light'}
//   >
//     Meals
//       </Button>
//     </Link >
