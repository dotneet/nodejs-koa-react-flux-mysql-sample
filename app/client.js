import React, { PropTypes } from "react";
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect } from "react-router";

import {Application,DefaultLayout} from "./layouts";
import Reflux from "reflux";
import CreateIndexPage from "./pages/index";
import NotFoundPage from "./pages/notfound";
import Action from "./client/actions.js";
import Store from "./client/store.js";

import './sass/main.scss';

// material-uiを使うのに必要
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

window.AppActions = Action(Reflux, window);
window.Store = Store(Reflux, AppActions, window);

const IndexPage = CreateIndexPage();

const routes = (
  <Route handler={Application}>
    <Route name="home" path="/" handler={DefaultLayout}>
      <DefaultRoute name="index" handler={IndexPage} />
      <NotFoundRoute handler={NotFoundPage} />
    </Route>
  </Route>
);

const container = document.getElementById("content");
Router.run(routes, Router.HashLocation, (Handler) => {
  React.render(<Handler/>, container);
});



