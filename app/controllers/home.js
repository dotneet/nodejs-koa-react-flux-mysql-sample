
export default function(r) {
  r.get('/', function *(){
    this.body = yield this.render('index.swig')
  });
}

