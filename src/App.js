import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Cases from "./views/cases/Cases";
import CaseDetail from './views/case detail/CaseDetail';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Router>
          <div class="container-fluid">
            <div class="row">
              <Sidebar />
              <Switch>
                <main className="col-md-12 ml-sm-auto col-lg-10 px-md-4">
                  {" "}
                  <Route exact path="/cases" component={Cases} />
                  <Route exact path="/cases/detail/:id" component={CaseDetail} />
                </main>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
