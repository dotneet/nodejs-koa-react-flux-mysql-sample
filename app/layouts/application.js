import React, { PropTypes } from "react";

import TransitionGroup from "react/lib/ReactCSSTransitionGroup";
import{ RouteHandler } from "react-router";

const ClientApp = React.createClass({
  contextTypes: {
    router: PropTypes.func,
  },

  render() {
    let key = this.context.router.getCurrentPath();
    return (
      <div>
        <div className="main-container">
          <TransitionGroup transitionName="transition">
            <RouteHandler key={key} />
          </TransitionGroup>
        </div>
      </div>
    );
  }
});


export default ClientApp;

