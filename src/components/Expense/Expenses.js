import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterYear = (filterData) => {
        setSelectedYear(filterData);
    };

    const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === selectedYear);

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onSelectedYear={filterYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;