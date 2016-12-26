var obj = {};

obj.foo = function () {
    console.log('ok');
}

obj.foo2 = function () {
    console.log('called foo2');
}

module.export = obj;