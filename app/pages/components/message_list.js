import React from "react";

import mui from 'material-ui';

export default class MessageList extends React.Component {
  static displayName = "MessageList";

  static propTypes = {
    items: React.PropTypes.array
  };

  constructor() {
    super();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    var ThemeManager = mui.Styles.ThemeManager();
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    var List = mui.List;
    var ListItem = mui.ListItem;
    return (
      <List>
        {
          this.props.items.map((item) => {
            return <ListItem primaryText={item} />;
          })
        }
      </List>
    );
  }
}
