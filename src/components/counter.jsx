import React from "react"


const Counter = (props) =>  {

return (
  <div>
    <span>{props.name}</span>
    <span className="badge bg-primary m-2">{props.onGetResult}</span>
    <button  className="btn btn-primary m-2" onClick={()=>props.onGetDecrement(props.id)}>+</button>
    <button className="btn btn-primary m-2" onClick={()=>props.onGetIncrement(props.id)}>-</button>
     <button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
  </div>
)

}

export default Counter;
