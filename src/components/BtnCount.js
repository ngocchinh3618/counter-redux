import React from 'react';
import { useDispatch } from 'react-redux';


export default function BtnCount(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={()=>dispatch({type: props.type, value: props.value})} className={`m-2 btn btn-${props.ClassColor}`}>Primary</button>
    </div>
  )
}