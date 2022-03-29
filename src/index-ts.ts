class Foo {
    #bar = "bar";

    get bar() {
        return this.#bar;
    }

    test(obj) {
        return #bar in obj;
    }
}

var obj = new Foo();
console.log(obj.bar);

