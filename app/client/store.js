'use strict';

export default function(Reflux, Actions, global) {
  return Reflux.createStore({
    listenables: [Actions],
    list: [],
    getInitialState: function() {
      console.log('getInitaia');
      this.list = [];
    },
    onAddItem: function(item) {
      console.log('store::onAddItem():%s', item);
      this.list.push(item);
      this.trigger(this.list);
    }
  });
}

