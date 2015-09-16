"use strict";

import Router from 'koa-router';
import HomeController from './controllers/home.js'

export default function(r){
  var use = (prefix, controller) => {
    var subRouter = Router();
    controller(subRouter);
    r.use(prefix, subRouter.routes())
  };

  // コントローラの登録
  use('', HomeController);
}
