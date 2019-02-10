import React, { useState } from "react"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Button
} from "shards-react"
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
          style={{ width: 125 }}
          // outline={location.pathname === "/" && "dark"}
          theme={location.pathname === "/" && "dark"}
          className="mr-3"
        >
          Calories
        </Button>
      </Link>
      <Link to="/meals">
        <Button
          style={{ width: 125 }}
          // outline
          theme={location.pathname === "/meals" ? "dark" : "light"}
        >
          Meals
        </Button>
      </Link>
    </div>
  )
}

export default withRouter(Navigation)
