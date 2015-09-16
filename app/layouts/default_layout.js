import React, { Component } from "react";
import { Link, RouteHandler } from "react-router";

export default class DefaultLayout extends Component {
  static displayName = "AnonymousLayout";
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }
}
