const router = require("express").Router();
const Expense = require("../model/Expense");

router.post("/add", async (req, res) => {
  const expense = new Expense({
    title: req.body.title,
    amount: req.body.amount,
    note: req.body.note,
    date: Date.parse(req.body.date),
  });
  try {
    const saveExpenses = await expense.save();
    res.send("expense added");
  } catch (err) {
    res.status(400).send(err);
  }
});

// get all expenses
router.get("/", async (req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).send(err));
});

// delete by id
router.delete("/:id", async (req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.send("expense deleted successfully"))
    .catch((err) => res.status(400).send(err));
});

// update by id
router.post("/edit/:id", async (req, res) => {
  Expense.findById(req.params.id).then((expense) => {
    expense.title = req.body.title;
    expense.amount = req.body.amount;
    expense.note = req.body.note;
    expense.date = Date.parse(req.body.date);

    expense
      .save()
      .then(() => res.json("expense updated"))
      .catch((err) => res.status(400).send(err));
  });
});

module.exports = router;
