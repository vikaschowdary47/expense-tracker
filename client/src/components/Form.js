import React from "react";
import AddIcon from "@material-ui/icons/Add";

const Form = () => {
  return (
    <div className="add-form">
      <input type="text" placeholder="Title" />
      <br />
      <input type="text" placeholder="Amount" />
      <br />
      <input type="text" placeholder="Note" />
      <br />
      <input type="date" placeholder="Date" />
      <br />
      <div className="add-button">
        <button>
          <AddIcon />
          ADD EXPENSE
        </button>
      </div>
    </div>
  );
};

export default Form;
