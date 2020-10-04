import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";

const Expenses = () => {
  return (
    <div className="expense">
      <div className="expense-body">
        <div className="icons">
          <EditIcon />
          Edit
        </div>
        <div>
          <div className="expense-content">
            <div>
              <div className="date mb-1">Date</div>
              <h6>Expense Title</h6>
              <div className="expense-note">
                <span>Note:</span>
                <p>Note for expense goes here</p>
              </div>
            </div>
            <div className="expense-cost">
              <h4>$5000</h4>
            </div>
          </div>
        </div>
        <div className="icons">
          <HighlightOffTwoToneIcon />
          Remove
        </div>
      </div>
    </div>
  );
};

export default Expenses;
