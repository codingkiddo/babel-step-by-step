var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldIn = (this && this.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};
var _Foo_bar;
class Foo {
    constructor() {
        _Foo_bar.set(this, "bar");
    }
    get bar() {
        return __classPrivateFieldGet(this, _Foo_bar, "f");
    }
    test(obj) {
        return __classPrivateFieldIn(_Foo_bar, obj);
    }
}
_Foo_bar = new WeakMap();
var obj = new Foo();
console.log(obj.bar);
