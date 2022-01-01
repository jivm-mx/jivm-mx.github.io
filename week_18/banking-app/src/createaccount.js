import React from "react";
import { Card, UserContext } from "./context";

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "Please, enter you password") {
      if (field.length < 8) {
        setStatus("Error: Your password must be at least 8 characters long");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    return true;
  }

  function handleCreate() {
    //console.log(name, email, password);
    if (!validate(name, "Please, enter your name")) return;
    if (!validate(email, "Please, enter your email")) return;
    if (!validate(password, "Please, enter you password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Give me your data"
      status={status}
      body={
        show ? (
          <>
            How'd I should call you?
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Mr. Worderful"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Where should I sent spam messages?
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="mr.wordeful@wonder.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Strong password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="y0uR v3ry Secre7 Passw0rd"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
              disabled={!name && !email && !password}
            >
              Create account :)
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              I want to add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
