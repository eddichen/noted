import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListNotes from "../scenes/ListNotes/index";
import AddNote from "../scenes/AddNote/index";
import NotFound from "../scenes/NotFound/index";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ListNotes} />
      <Route path="/add-note" component={AddNote} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
