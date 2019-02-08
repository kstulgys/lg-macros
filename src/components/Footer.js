import React from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
  Collapse
} from "shards-react"

export default function Footer() {
  return (
    <Navbar type="dark" theme="dark" expand="md">
      {
        // <NavbarBrand href="#">Shards React</NavbarBrand>
        // <NavbarToggler onClick={{}} />
        // <Collapse open={{}} navbar>
        //   <Nav navbar>
        //     <NavItem>
        //       <NavLink active href="#">
        //         Active
        //       </NavLink>
        //     </NavItem>
        //     <NavItem>
        //       <NavLink href="#" disabled>
        //         Disabled
        //       </NavLink>
        //     </NavItem>
        //   </Nav>
        //   <Nav navbar className="ml-auto" />
        // </Collapse>
      }
    </Navbar>
  )
}
