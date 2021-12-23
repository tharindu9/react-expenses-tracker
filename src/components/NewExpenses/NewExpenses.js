import React, {useState} from 'react';
import  "./NewExpenses.css";
import ExpensesForm from './ExpensesForm';

const NewExpenses = (props) => {

    const [expenseForm, setExpenseForm] = useState(false);

    const onSaveExpensesHandler = expense => {
        const expenseData = {
            ...expense,
            id : Math.random().toString()
        }
        props.onAddExpenses(expenseData)
        setExpenseForm(false);
    }

    const onChangeExpenseFormState = (event) => {
        setExpenseForm(true)
    }

    const cancleHandleTheForm = () => {
        setExpenseForm(false);
    }
    if(!expenseForm) {
        return <div className="new-expense"> 
            <button onClick={onChangeExpenseFormState}> Add new Expenses </button>
        </div>
    }
    return(
        <div className="new-expense">
            <ExpensesForm cancleHandler={cancleHandleTheForm} onSaveExpenses={onSaveExpensesHandler}/>
        </div>
    )
}

export default NewExpenses;