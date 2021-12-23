import {useState} from 'react';
import "./ExpensesForm.css";

const ExpensesForm = (props) => {

    // const [userInputs, setUserInputs] = useState({
    //     title : '',
    //     ammount : '',
    //     date : ''
    // })

    const [enteredTitle, setEnteredTitle ] = useState('');
    const [enteredAmmount, setenteredAmmount ] = useState('');
    const [enteredDate, setenteredDate ] = useState('');

    

    const titleChangeHandler = event => {
        // setUserInputs({
        //     ...userInputs,
        //     title : event.target.value
        // });
        setEnteredTitle(event.target.value)
    }

    const ammountChangeHandler = event => {
        // setUserInputs({
        //     ...userInputs,
        //     ammount : event.target.value
        // });
        setenteredAmmount(event.target.value);
    }

    const dateChangeHandler = event => {
        // setUserInputs({
        //     ...userInputs,
        //     date : event.target.value
        // });
        setenteredDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        const formData = {
            title : enteredTitle,
            amount : enteredAmmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenses(formData);
        setEnteredTitle('');
        setenteredAmmount('');
        setenteredDate('');
    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                value = {enteredTitle}
                onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'
                value={enteredAmmount}
                onChange={ammountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' 
                value={enteredDate}
                onChange={dateChangeHandler} />
            </div>
            </div>
            <div className='new-expense__actions'>
            <button onClick={props.cancleHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpensesForm;