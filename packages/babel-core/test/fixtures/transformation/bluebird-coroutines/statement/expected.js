import { coroutine as _coroutine } from "bluebird";

let foo = (function () {
  var ref = _coroutine(function* foo() {
    var wat = yield bar();
  });

  return function foo() {
    return ref.apply(this, arguments);
  };
})();
