import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import { IconButton } from "@material-ui/core";
import axios from "axios";

const Expenses = ({ data, editData, field }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesData = async () => {
      await axios.get("http://localhost:9000/api/expense/").then((res) => {
        setExpenses(res.data);
        console.log(res.data);
      });
    };
    expensesData();
  }, [data]);

  const removeField = async (id) => {
    await axios.delete(`http://localhost:9000/api/expense/${id}`);
    await axios.get("http://localhost:9000/api/expense/").then((res) => {
      setExpenses(res.data);
      data = res.data;
      // console.log(res.data);
    });
  };
  // const editField = async (id) => {
  //   // await axios.get("http://localhost:9000/api/expense/").then((res) => {})
  //   const editExpense = expenses.filter((ex) => ex._id === id);
  //   editData(editExpense);
  //   console.log(editExpense);
  // };
  return (
    <div className="expense">
      {expenses.map((expense, i) => (
        <div className="expense-body" key={i}>
          <div
            className="icons"
            // onClick={() => editField(expense._id)}
            onClick={field}
          >
            <IconButton style={{ border: "none", outline: "none" }}>
              <EditIcon />
            </IconButton>
            Edit
          </div>
          <div>
            <div className="expense-content">
              <div>
                <div className="date mb-1">
                  {`${expense.date}`.substring(0, 10)}
                </div>
                <h6>{expense.title}</h6>
                <div className="expense-note">
                  <span>Note:</span>
                  <p>{expense.note}</p>
                </div>
              </div>
              <div className="expense-cost">
                <h4>&#x20B9;{expense.amount} </h4>
              </div>
            </div>
          </div>
          <div className="icons" onClick={() => removeField(expense._id)}>
            <IconButton style={{ border: "none", outline: "none" }}>
              <HighlightOffTwoToneIcon />
            </IconButton>
            Remove
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
