import React from "react";
import { Card, UserContext } from "./context";

function Deposit() {
  const ctx = React.useContext(UserContext);
  const currentUser = ctx.currentUser;
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState(
    currentUser ? currentUser[0].balance : null
  );

  function validate(amount) {
    if (!Number(amount) || amount <= 0) {
      setStatus("We only accept positive numbers");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function clearForm() {
    setAmount("");
  }

  function handleDeposit() {
    if (!validate(amount)) return;
    console.log(`current es ${currentUser[0].balance}, ${amount}`);
    currentUser[0].balance = Number(amount) + Number(currentUser[0].balance);
    setBalance(currentUser[0].balance);
    currentUser[0].transactions.push({
      date: Date(),
      type: "deposit",
      amount: Number(amount),
    });
    setStatus("Yeahh, now we have your money!");
    setTimeout(() => setStatus(""), 3000);
    clearForm();
  }

  return (
    <Card
      bgcolor="secondary"
      header={
        currentUser
          ? "Wanna top up? Your balance is " + balance
          : "Deposit form"
      }
      title={
        currentUser
          ? "How much money do you wanna give me?"
          : "To give me money, you must log in"
      }
      status={status}
      body={
        <>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter the amount"
            value={amount}
            disabled={!currentUser}
            hidden={!currentUser}
            onChange={(e) => {
              setAmount(e.currentTarget.value);
            }}
          />
          <br />
          <button
            type="submit"
            disabled={!amount}
            hidden={!currentUser}
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Top up
          </button>
        </>
      }
    />
  );
}

export default Deposit;
