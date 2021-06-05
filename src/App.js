import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import MemesList from "./containers/MemesList/MemesList";
import MemesGenerator from "./containers/MemesGenerator/MemesGenerator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MemesList} />
          <Route path="/generator/:id" component={MemesGenerator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
