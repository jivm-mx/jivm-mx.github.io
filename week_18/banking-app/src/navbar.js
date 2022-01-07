import React from 'react';
import { UserContext } from './context';

function NavBar() {
  const ctx = React.useContext(UserContext);
  let currentUser = ctx.currentUser;

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#/" title="Home">
          ReallyBadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="av-item active">
              <a className="nav-link" href="#/login/" title="Login">
                {currentUser ? 'Hello ' + currentUser[0].name : 'Login '}
              </a>
            </li>
            <li className="av-item">
              <a
                className="nav-link"
                href="#/createAccount/"
                title="Create account"
              >
                Create Account
              </a>
            </li>
            <li className="av-item">
              <a className="nav-link" href="#/deposit/" title="Deposit">
                Deposit
              </a>
            </li>
            <li className="av-item">
              <a className="nav-link" href="#/withdraw/" title="Withdraw">
                Withdraw
              </a>
            </li>
            <li className="av-item">
              <a className="nav-link" href="#/alldata/" title="All data">
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
