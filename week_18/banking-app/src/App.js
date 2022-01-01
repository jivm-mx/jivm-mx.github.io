import { HashRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context";
import NavBar from "./navbar";
import Home from "./home";
import Login from "./login";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";

function App() {
  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          currentUser: null,
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
              transactions: [],
            },
          ],
        }}
      >
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
            <Route path="/login/" element={<Login />} />
            {/* <Route path="/balance/" element={<Balance />} /> */}
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
