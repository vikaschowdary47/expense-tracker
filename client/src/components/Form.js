import React, { useState, useContext, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { ExpensesContext } from "../context/ExpensesContext";

const Form = ({ data, editData, field }) => {
  const [expenses, setExpenses] = useContext(ExpensesContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  const onSubmit = async (e) => {
    e.preventDefault();
    const expense = {
      title: title,
      amount: Number(amount),
      note: note,
      date: date,
    };
    await axios.post("http://localhost:9000/api/expense/add", expense);
    setTitle("");
    setAmount("");
    setNote("");
    setDate(new Date());
    await axios.get("http://localhost:9000/api/expense/").then((res) => {
      setExpenses(res.data);
    });
  };
  useEffect(() => {
    if (data === true) {
      editData.map((data) => {
        setNote(data.note);
        setAmount(data.amount);
        setTitle(data.title);
        // setDate(data.date);
      });
    }
  }, [editData, data]);

  const edit = async () => {
    const expense = {
      title: title,
      amount: Number(amount),
      note: note,
      date: date,
    };
    await axios.post(
      `http://localhost:9000/api/expense/edit/${editData[0]._id}`,
      expense
    );
    setTitle("");
    setAmount("");
    setNote("");
    setDate(new Date());
    await axios.get("http://localhost:9000/api/expense/").then((res) => {
      setExpenses(res.data);
    });
  };

  return (
    <div className="add-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        />
        <br />
        <DatePicker
          className="date-form"
          selected={date}
          minDate={new Date()}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
          onChange={(date) => setDate(date)}
          required
        />
        <br />
        <div className="add-button">
          {data ? (
            ""
          ) : (
            <button type="submit">
              <AddIcon />
              ADD EXPENSE
            </button>
          )}
        </div>
      </form>
      <div className="add-button">
        {data ? (
          <button onClick={edit}>
            <EditIcon />
            Edit Data
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Form;
