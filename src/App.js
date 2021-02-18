import "./App.css";

import Header from "./components/Header";
import React from "react";
import Search from "./pages/Search";

const App = () => {
  document.title = "EmployeeLookup";
  return (
    <Router>
      <div>
        <Header />
            <Search /> 
      </div>
    </Router>
  );
};

export default App;
