import React, { useState } from 'react'
import './ExpenceForm.css';
const ExpenceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expence__controls'>
                    <div className='new-expence__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expence__control'>
                        <label>Amount</label>
                        <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expence__control'>
                        <label>Date</label>
                        <input type='Date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expence__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenceForm;
