import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from "./News";
import Bookmark from "./Bookmark";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/bookmark">Bookmarks</Link>
            </li>
          </ul>
        </nav>
        <News/>
      </div>
    </Router>
  );
};

export default App;
