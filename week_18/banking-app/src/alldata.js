import React from "react";
import { Card, UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);
  const currentUser = ctx.currentUser;
  if (currentUser) {
    console.log(currentUser[0].transactions);
  }
  return (
    <>
      <Card
        bgcolor="secondary"
        header={currentUser ? currentUser[0].email : "Transaction list"}
        title={
          currentUser
            ? "Current user: " + currentUser[0].email
            : "Try loggin in first"
        }
      />
      {currentUser
        ? currentUser[0].transactions.map((transaction) => (
            <Card
              bgcolor="info"
              header={transaction.type + " - " + transaction.date}
              title=""
              body={"$" + transaction.amount}
            />
          ))
        : ""}
    </>
  );
}

export default AllData;
