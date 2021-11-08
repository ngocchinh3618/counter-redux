import {React} from 'react';
import { useSelector } from 'react-redux'
import BtnCount from './BtnCount';
import * as calculation from "../actions/index";


export default function Index() {
  const user = useSelector(state => state.counter)
  const colorBtn = [
    {
      color: "danger",
      type: calculation.ADD,
      value: 5
    },
    {
      color: "primary",
      type: calculation.SUB,
      value: 1
    }, {
      color: "success",
      type: calculation.MUL,
      value: 10
    }
  ];
  console.log("Re-rendered");
  const colorBtnMap = colorBtn.map((i, index) => <BtnCount key={index} ClassColor={i.color} type={i.type} value={i.value}/>)
  return (
    <div>
      <div>
        <h1>Counter:{user}</h1>
      </div>
      <div className="d-flex justify-content-center">
        {colorBtnMap}
      </div>
    </div>
  )
}
