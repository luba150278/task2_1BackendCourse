// =============TASK 1================
function getFirstWord(a: string): number {
  return a.split(/ +/)[0].length;
}
//----test task#1---------------
console.log(getFirstWord("hello goodbye"));

//=============TASK 2================
type FullName = {
  name: string;
  surname: string;
};
type UserNaming = {
  fullname: string;
  initials: string;
};
function getUserNamings(a: FullName): UserNaming {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0],
  };
}
//----test task#2---------------
console.log(getUserNamings({ name: "Luba", surname: "Myetolkina" }));

//=============TASK 3================
type ProductName = {
  name: string;
};
type Products = {
  products: ProductName[];
};
function getAllProductNames(a?: Products): string[] {
  return a?.products?.map((prod) => prod?.name) || [];
}
//----test task#3---------------
const myProducts: Products = {
  products: [{ name: "butter" }, { name: "bread" }],
};
//----test task#3---------------
console.log(getAllProductNames(myProducts));
console.log(getAllProductNames());
//=============TASK 4.1================
interface FullNameInterface {
  name: () => string;
  cuteness?: number | boolean;
  coolness?: number;
  type?: string;
}
class AbstractPet {
  naming: string;
  constructor(name: string) {
    this.naming = name;
  }
  name() {
    return this.naming;
  }
}
function hey(a: FullNameInterface): string;
function hey(a: AbstractPet): string;

function hey(a: FullNameInterface | AbstractPet): string {
  if (a instanceof AbstractPet || a.type === undefined) {
    return "hey! i'm " + a.name();
  } else {
    return (
      "hey! i'm " +
      a.name() +
      (a.type === "cat"
        ? "; cuteness: " + a.cuteness
        : "; coolness: " + a.coolness)
    );
  }
}

//----test task#4.1---------------
console.log(hey({ name: () => "roma", cuteness: 100 }));
console.log(hey({ name: () => "vasya", coolness: 100 }));

//==============TASK 4.2================

class Cat extends AbstractPet {
  isNice: boolean;
  constructor(name: string, isNice: boolean) {
    super(name);
    this.isNice = isNice;
  }
}
class Dog extends AbstractPet {
  countEat: number;
  constructor(name: string, countEat: number) {
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
function stringEntries(a: [] | {}) {
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
async function world(a: number) {
  const b: string = "*";
  return b.repeat(a)
}
const hello = async () => {
 return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))
