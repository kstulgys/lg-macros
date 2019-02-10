import React, { useState, useEffect } from "react"
import {
  FormRadio,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react"
import Store from "../../store"

function BfDropdown() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  const [bfSelected, setBf] = useState(10)

  // const onClick = num => {
  //   console.log(e);
  // };
  const onBodyFatPercentChange = val => {
    setBf(val)
    setState(state => {
      state.bodyFat = val
    })
  }

  return (
    <Dropdown
      open={isOpen}
      toggle={() => setOpen(!isOpen)}
      size="sm"
      className="mr-2"
    >
      <DropdownToggle
        outline
        theme="dark"
        disabled={state.bodyFatValue !== 0.5}
        caret
        style={{ fontSize: "1rem", width: 50 }}
        className="px-0 py-1"
      >
        {bfSelected}
      </DropdownToggle>
      <DropdownMenu>
        {Array(6)
          .fill(null)
          .map((n, i) => {
            return (
              <DropdownItem
                key={i}
                className=" my-0"
                onClick={() => onBodyFatPercentChange(i + 5)}
              >
                {i + 5}
              </DropdownItem>
            )
          })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default function PersonSex() {
  const { state, setState } = Store.useStore()

  const onBodyFatChange = val =>
    state.bodyFatValue === val
      ? setState(state => {
          state.bodyFatValue = 0
        })
      : setState(state => {
          state.bodyFatValue = val
        })

  return (
    <>
      <h5 className="font-weight-bold">Body Fat</h5>
      <div className="d-flex align-items-center">
        <div className="pt-2">
          <FormRadio
            // className="pt-4"
            checked={state.bodyFatValue === 0.5}
            onChange={() => onBodyFatChange(0.5)}
          />
        </div>

        {state.sexValue === 28 ? (
          <>
            <BfDropdown />
            {` < 10%`}
          </>
        ) : (
          `BF < 18%`
        )}
      </div>

      <FormRadio
        checked={state.bodyFatValue === 0}
        onChange={() => onBodyFatChange(0)}
      >
        {state.sexValue === 28 ? `BF ~ 15 %` : `BF ~ 23 %`}
      </FormRadio>
      <FormRadio
        checked={state.bodyFatValue === -0.5}
        onChange={() => onBodyFatChange(-0.5)}
      >
        {state.sexValue === 28 ? `20 % < BF < 24 %` : `28 % < BF < 32 %`}
      </FormRadio>
      <FormRadio
        checked={state.bodyFatValue === -1}
        onChange={() => onBodyFatChange(-1)}
      >
        {state.sexValue === 28 ? `25 % < BF < 29 %` : `33 % < BF < 37 %`}
      </FormRadio>
      <FormRadio
        checked={state.bodyFatValue === -1.5}
        onChange={() => onBodyFatChange(-1.5)}
      >
        {state.sexValue === 28 ? `BF > 29 %` : `BF > 37 %`}
      </FormRadio>
    </>
  )
}
