import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Error404 } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="*" component={Error404} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
