import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Form = ({ data, editData, field }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title: title,
      amount: Number(amount),
      note: note,
      date: date,
    };
    axios.post("http://localhost:9000/api/expense/add", expense);
    console.log(expense);
    data(expense);
  };

  const fields = () => {
    // if (editData) {
    setTitle("title");
    setAmount(10);
    // setDate("date");
    setNote("note");
    // editData.map((d) => {
    // setTitle(d.title);
    // setAmount(d.amount);
    // setDate(d.date);
    // setNote(d.note);
    //     console.log(d.title);
    //     console.log(d.amount);
    //     console.log(d.date);
    //     console.log(d.note);
    //   });
    // }
  };
  // if (field) {
  //   fields();
  // }

  // const test = () => {
  //   setTitle("title");
  //   setAmount(10);
  //   // setDate("date");
  //   setNote("note");
  // };

  console.log(editData);
  return (
    <div className="add-form">
      {/* {editData ? fields() : null} */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
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
        />
        <br />
        <div className="add-button">
          <button type="submit">
            <AddIcon />
            ADD EXPENSE
          </button>
        </div>
      </form>
      <button onClick={test}>sfdsff</button>
    </div>
  );
};

export default Form;
