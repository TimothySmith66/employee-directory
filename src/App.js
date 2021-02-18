import "./App.css";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Wrapper from "./components/Wrapper";

const App = () => {
  document.title = "Wikipedia Searcher";
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Wrapper>
      </div>
    </Router>
  );
};

export default App;
