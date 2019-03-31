import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/GamePage" component={GamePage} />
      </div>
    </Router>
  );
}

export default App;