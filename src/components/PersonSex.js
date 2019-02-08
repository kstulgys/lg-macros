import React, { useState, useEffect } from "react";
import { FormCheckbox, FormInput } from "shards-react";
import Store from "../store";

export default function PersonSex() {
  const { state, setState } = Store.useStore();

  const onSexChange = () =>
    state.sexValue === 28
      ? setState(state => {
          state.sexValue = 26;
        })
      : setState(state => {
          state.sexValue = 28;
        });

  return (
    <>
      <h5 className="font-weight-bold">Sex</h5>
      <FormCheckbox checked={state.sexValue === 28} onChange={onSexChange}>
        Male
      </FormCheckbox>
      <FormCheckbox checked={state.sexValue === 26} onChange={onSexChange}>
        Female
      </FormCheckbox>
    </>
  );
}
