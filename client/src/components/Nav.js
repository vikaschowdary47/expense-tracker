import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

const Nav = () => {
  const [expenses, setExpenses] = useContext(ExpensesContext);
  const total = () => {
    const amounts = expenses.map((e) => {
      return e.amount;
    });
    const total = amounts.reduce((a, b) => {
      return a + b;
    }, 0);
    return total;
  };
  return (
    <div className="nav mt-5">
      <h1>MY EXPENSES</h1>
      <div className="total">
        <h3>Total</h3>
        <div>{total()}</div>
      </div>
    </div>
  );
};

export default Nav;
