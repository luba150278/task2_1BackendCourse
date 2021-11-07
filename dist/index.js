"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// =============TASK 1================
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
//----test task#1---------------
console.log(getFirstWord("hello goodbye"));
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0],
    };
}
//----test task#2---------------
console.log(getUserNamings({ name: "Luba", surname: "Myetolkina" }));
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map((prod) => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
//----test task#3---------------
const myProducts = {
    products: [{ name: "butter" }, { name: "bread" }],
};
//----test task#3---------------
console.log(getAllProductNames(myProducts));
console.log(getAllProductNames());
class AbstractPet {
    constructor(name) {
        this.naming = name;
    }
    name() {
        return this.naming;
    }
}
function hey(a) {
    if (a instanceof AbstractPet || a.type === undefined) {
        return "hey! i'm " + a.name();
    }
    else {
        return ("hey! i'm " +
            a.name() +
            (a.type === "cat"
                ? "; cuteness: " + a.cuteness
                : "; coolness: " + a.coolness));
    }
}
//----test task#4.1---------------
console.log(hey({ name: () => "roma", cuteness: 100 }));
console.log(hey({ name: () => "vasya", coolness: 100 }));
//==============TASK 4.2================
class Cat extends AbstractPet {
    constructor(name, isNice) {
        super(name);
        this.isNice = isNice;
    }
}
class Dog extends AbstractPet {
    constructor(name, countEat) {
        super(name);
        this.countEat = countEat;
    }
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
//----test task#4.2---------------
console.log(hey(a));
console.log(hey(b));
//----test task#4.3---------------
console.log(hey({ name: () => "roma", type: "cat", cuteness: 100 }));
console.log(hey({ name: () => "vasya", type: "dog", coolness: 100 }));
//============================TASK#5====================
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
//----test task#5---------------
const stringArr = ["monday", "tuesday"];
const numberArr = [5, 6];
const obj = { name: "luba", surname: "myetolkina" };
console.log(stringEntries(stringArr));
console.log(stringEntries(numberArr));
console.log(stringEntries(obj));
//====================TASK#6=======================
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        const b = "*";
        return b.repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
