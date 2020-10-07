import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ExpensesContext = createContext();

export const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesData = async () => {
      await axios.get("http://localhost:9000/api/expense/").then((res) => {
        setExpenses(res.data);
      });
    };
    expensesData();
  }, []);

  return (
    <ExpensesContext.Provider value={[expenses, setExpenses]}>
      {props.children}
    </ExpensesContext.Provider>
  );
};
