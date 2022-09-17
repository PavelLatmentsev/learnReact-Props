import React, {useState} from "react";
import Counter from "./counter";
const CountersList =() => {
  const initialState = [
    {id:0, value:0, name:'Ненужная вещь'},
    {id:1, value:0, name:'Ложка'},
    {id:2, value:0, name:'Вилка'},
    {id:3, value:0, name:'Тарелка'},
    {id:4, value:0, name:'Набор Минималиста'}]
    const [counters, setCounters] = useState(initialState);
   

    const heandleDelete = (id) => {
     setCounters((prevState)=> prevState.filter((item) => item.id!==id))
    }

  const heandleReset = () =>{
    setCounters(initialState)
  }

  const result = (count) => {
      return count.value !==0 ? count.value : 'Empty'
}

  const getIncrement =(id) => {
    let newStateIncrement = counters.map(item => {
      if(item.id === id) {
        return {...item, value: item.value - 1}
  
      } else {
        return item
      }
      })
      setCounters(newStateIncrement)
      
  }
  
  const getDecrement =(id) => {
    
  const newStateDecrement = counters.map(item => {
    if(item.id === id) {
      return {...item, value: item.value + 1}
   
    } else {
      return item
    }
    })
    setCounters(newStateDecrement)
  }
  
  return (
  <>  
  {counters.map(count => <Counter 
   key={count.id}
  {...count}
  onDelete= {heandleDelete} onGetDecrement={getDecrement} onGetResult={result(count)} onGetIncrement={getIncrement}
  /> )}
    <button className="btn btn-primary btn-sm m-2" onClick={heandleReset}>Сброс</button>
   </>

  )
}

export default CountersList;