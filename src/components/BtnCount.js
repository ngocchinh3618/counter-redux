import React from 'react';
import { useDispatch } from 'react-redux';


export default function BtnCount(props) {
  const dispatch = useDispatch();

  const updateValue = () => {
    dispatch({type: props.type, value: props.value})
  }

  return (
    <div>
      <button type="button" onClick={updateValue} className={`m-2 btn btn-${props.ClassColor}`}>Primary</button>
    </div>
  )
}