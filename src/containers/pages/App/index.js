import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Register from "../Register";
import Login from "../Login";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
