//import koa from 'koa'
//import MyElement from './MyElement'

//var e = new MyElement()
//e.test()

import AppRouter from './router'

import Koa from 'koa';
import KoaRouter from 'koa-router';
import views from 'co-views';
import serve from 'koa-static';
import KoaIO from 'koa.io';

export default function(config) {
  var koa  = KoaIO();

  koa.use(function *(next) {
    this.render = views('./app/views', {
      map: { html: "swig" },
      cache: false
    });
    yield next;
  });

  koa.use(serve(config.appdir + '/public'));

  var router = KoaRouter();
  AppRouter(router);
  koa.use(router.routes());

  koa.listen(config.server.port);
  console.log('start server. port=%s', config.server.port);

  koa.io.use(function *(){
    console.log('websocket connect');
    yield* next;
    console.log('websocket disconnect');
  });

  koa.io.route('msg', function *(){
    var msg = this.args[0];
    this.boradcast.emit('msg', msg);
  });
}

