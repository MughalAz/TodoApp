import React, { useState } from 'react'
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenceItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log('ExpenceItem are evaluated'); 

  const clickHandler = () =>{
    setTitle('Updated');
    console.log(title);
  };

  return (
   <div className='expence-item w-75 mt-2 mb-2 m-auto'>
    <ExpenseDate date={props.date}/>
    <div className='expence-item__description'>
      <h2>{title}</h2>
      </div>
      <div className='expence-item__price'>${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
   </div>
  )
}
export default ExpenceItem;