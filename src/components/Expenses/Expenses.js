import React, {useState} from 'react';
import ExpenseItem from"./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filterdeYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilterdYear(selectedYear);
    
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterdeYear;
    })

    let expensesContent = "<p> No Expenses found <p/>";

    return (
        
        <Card className="expenses">

            <ExpenseFilter selectedYear = {filterdeYear}
             onChangeFilter={filterChangeHandler} />

            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>

        </Card>
    )
}

export default Expenses;