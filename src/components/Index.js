import {React, useState} from 'react'
import { useStore } from 'react-redux'
import BtnCount from './BtnCount';
import * as calculation from "../actions/index";


export default function Index() {
  const store = useStore();
  const colorBtn = [
    {
      color: "danger",
      type: calculation.ADD,
      value: 5
    },
    {
      color: "primary",
      type: calculation.ADD,
      value: 1
    }, {
      color: "success",
      type: calculation.ADD,
      value: 10
    }
  ];
  console.log("Re-rendered");
  const colorBtnMap = colorBtn.map((i, index) => <BtnCount key={index} ClassColor={i.color} type={i.type} value={i.value}/>)
  return (
    <div>
      <div>
        <h1>Counter:{store.getState().counter}</h1>
      </div>
      <div className="d-flex justify-content-center">
        {colorBtnMap}
      </div>
    </div>
  )
}
