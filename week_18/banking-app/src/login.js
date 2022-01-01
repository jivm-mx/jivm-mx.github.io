import React from "react";
import { Card, UserContext } from "./context";

function Login() {
  const ctx = React.useContext(UserContext);
  let currentUser = ctx.currentUser;
  const [show, setShow] = React.useState(currentUser ? false : true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(mail, password) {
    const result = ctx.users.filter(function (item) {
      return item.email === mail;
    });
    if (result.length === 0) {
      setStatus("User not found");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (result[0].password !== password) {
      setStatus("Check your password");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function handleLogin() {
    if (!validate(email, password)) return;
    const result = ctx.users.filter(function (item) {
      return item.email === email;
    });
    currentUser = result;
    ctx.currentUser = currentUser;
    setShow(false);
  }

  function logOut() {
    ctx.currentUser = null;
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Log in"
      status={status}
      body={
        show ? (
          <>
            What's your email?
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
            What's your password?
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
              onClick={handleLogin}
              disabled={!email || !password}
            >
              Validate!
            </button>
          </>
        ) : (
          <>
            <h5>
              <b>{currentUser[0].name}</b>, Yeah, you're in
            </h5>
            <p>With don't you go to other menus?</p>
            <button type="submit" className="btn btn-light" onClick={logOut}>
              Wanna log out, click here
            </button>
          </>
        )
      }
    />
  );
}

export default Login;
