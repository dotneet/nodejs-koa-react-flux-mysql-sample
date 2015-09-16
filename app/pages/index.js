import React,{TextInput} from "react";

import mui from 'material-ui';
import MessageList from './components/message_list';
import ReactMixin from 'react-mixin';
import Reflux from "reflux";

class Index extends React.Component {
  static displayName = "IndexPage";
  static mixins = [Reflux.listenTo(window.Store, "onAddItem")];

  static propTypes = {
    value: React.PropTypes.string
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  constructor() {
    super();
    this.state = { 
      value: '',
      list: [1,2,3]
    };
  }

  getChildContext() {
    var ThemeManager = mui.Styles.ThemeManager();
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  onChangeText(e) {
    this.setState({value:e.target.value});
  }

  onAddItem() {
    console.log('handleAddItem');
    this.setState({list:window.Store.list});
  }

  onClick(e) {
    window.AppActions.addItem(this.state.value);
    this.state.value = '';
  }

  render() {
    var RaisedButton = mui.RaisedButton;
    var TextField = mui.TextField;
    return (
      <div>
        <TextField
          hintText="input"
          value={this.state.value}
          onChange={this.onChangeText.bind(this)}
          />
        <RaisedButton primary={true} label="Raised Button" onClick={this.onClick.bind(this)}/>
        <MessageList items={this.state.list} />
      </div>
    );
  }
};

let initialized = false;
export default function CreateIndexPage() {
  if ( !initialized ) {
    ReactMixin(Index.prototype, Reflux.listenTo(window.Store, "onAddItem"));
  }
  return Index;
}


