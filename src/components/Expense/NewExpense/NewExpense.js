import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {
    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSaveExpense(expenseData);
    }

    const addExpenseHander = _ => {
        setShowNewExpenseForm(true);
    }

    const cancelExpenseHandler = _ => {
        setShowNewExpenseForm(false);
    }

    return <div className="new-expense">
        {!showNewExpenseForm && <button onClick={addExpenseHander}>Add New Expense</button>}
        {showNewExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler} />}
    </div>;
}

export default NewExpense;