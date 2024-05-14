import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sankey from './Diagramm';

const SankeyDiagram = () => {
  const [incomes, setIncomes] = useState([{ source: 'Salary', amount: 2000 }]);
  const [expenses, setExpenses] = useState([{ category: 'Housing', destination: 'Rent', amount: 1000 }]);
  const [categories, setCategories] = useState(['Housing']);
  const [showSankey, setShowSankey] = useState(false);

  const addIncome = () => {
    setIncomes([...incomes, { source: '', amount: 0 }]);
  };

  const addExpense = () => {
    setExpenses([...expenses, { category: '', destination: '', amount: 0 }]);
  };

  const addCategory = () => {
    setCategories([...categories, '']);
  };

  const deleteIncome = (index) => {
    const updatedIncomes = [...incomes];
    updatedIncomes.splice(index, 1);
    setIncomes(updatedIncomes);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const updateIncome = (index, field, value) => {
    const updatedIncomes = incomes.map((income, i) =>
      i === index ? { ...income, [field]: value } : income
    );
    setIncomes(updatedIncomes);
  };

  const updateExpense = (index, field, value) => {
    const updatedExpenses = expenses.map((expense, i) =>
      i === index ? { ...expense, [field]: value } : expense
    );
    setExpenses(updatedExpenses);
  };

  const updateCategory = (index, value) => {
    const updatedCategories = categories.map((category, i) =>
      i === index ? value : category
    );
    setCategories(updatedCategories);
  };

  const generateSankey = () => {
    setShowSankey(!showSankey);
  };

  const data = [
    ['From', 'To', 'Amount'],
    ...incomes.map(income => [income.source, 'Income', Number(income.amount)]),
    ...expenses.flatMap(expense => [
      ['Income', expense.category, Number(expense.amount)],
      [expense.category, expense.destination, Number(expense.amount)]
    ]),
  ];

  return (
    <div className="m-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <h3>Incomes</h3>
          {incomes.map((income, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Source"
                value={income.source}
                onChange={e => updateIncome(index, 'source', e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={income.amount}
                onChange={e => updateIncome(index, 'amount', e.target.value)}
              />
              <button className="btn btn-danger" onClick={() => deleteIncome(index)}>Delete</button>
            </div>
          ))}
          <button className="btn btn-primary" onClick={addIncome}>Add Income</button>
        </div>
        <div className="col-md-6">
          <h3>Expenses</h3>
          {expenses.map((expense, index) => (
            <div key={index} className="input-group mb-2">
              <select
                className="form-select"
                value={expense.category}
                onChange={e => updateExpense(index, 'category', e.target.value)}
              >
                {categories.map((category, i) => (
                  <option key={i} value={category}>{category}</option>
                ))}
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Destination"
                value={expense.destination}
                onChange={e => updateExpense(index, 'destination', e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={expense.amount}
                onChange={e => updateExpense(index, 'amount', e.target.value)}
              />
              <button className="btn btn-danger" onClick={() => deleteExpense(index)}>Delete</button>
            </div>
          ))}
          <button className="btn btn-primary" onClick={addExpense}>Add Expense</button>
        </div>
      </div>
      <div className="mb-4">
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <div key={index} className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={category}
              onChange={e => updateCategory(index, e.target.value)}
            />
            <button className="btn btn-danger" onClick={() => deleteCategory(index)}>Delete</button>
          </div>
        ))}
        <button className="btn btn-primary" onClick={addCategory}>Add Category</button>
      </div>
      <button className="btn btn-primary" onClick={generateSankey}>Generate Sankey</button>
      {showSankey && (
        <Sankey chartData={data} />
      )}
    </div>
  );
};

export default SankeyDiagram;
