"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
// * 1. Interfeys bilan foydalanuvchi ma'lumotlarini model qilish
// * 4. readonly maydonli interfeys
var PersonSpace;
(function (PersonSpace) {
  class Person {
    constructor(id, name, age, is_student, email) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.is_student = is_student;
      this.email = email;
    }
    greet() {
      return `Hello, my name is ${this.name} and my id is ${this.id}`;
    }
  }
  PersonSpace.Person = Person;
})(PersonSpace || (PersonSpace = {}));
const personcha1 = new PersonSpace.Person(10078, "Doniyor", 16, true);
// console.log(personcha1);
// console.log(personcha1.greet());
// * 2. Funksiya turini yozish
var FunctionSpace;
(function (FunctionSpace) {
  function getSumFunc(num, num2) {
    return num + num2;
  }
  FunctionSpace.getSum = getSumFunc;
})(FunctionSpace || (FunctionSpace = {}));
// console.log(FunctionSpace.getSum(1, 10));
// * 3. void tipli funksiya
function logText(text) {
  console.log("Text:", text);
}
const product_color = "blue";
// console.log(product_color);
// * 6. never turli funksiya yozish
const returnError = () => {
  const random = Math.round(Math.random() * 100);
  console.log(random);
  if (random > 50) throw new Error("Random son 50 dan katta!").message;
  throw new Error("Random 50 dan kichik yoki teng").message;
};
// returnError();
// * 7. unknown tipli qiymatni ishlatish
const checkUnknown = (value) => {
  let valueType;
  switch (typeof value) {
    case "string":
      valueType = "string";
      console.log("UpperCase:", value.toUpperCase());
      break;
    case "number":
      valueType = "number";
      console.log("Multiplied:", value * 2);
      break;
    case "boolean":
      valueType = "boolean";
      console.log("Boolean:", value ? "Yes" : "No");
      break;
    case "object":
      valueType = "object";
      if (value !== null) {
        console.log("Object entries:", Object.entries(value));
      } else {
        console.log("Null value");
      }
      break;
    case "function":
      valueType = "function";
      value();
      break;
    default:
      valueType = "unknown type";
  }
  console.log(`Value type is ${valueType}`);
};
// checkUnknown("string");
// checkUnknown(12);
// checkUnknown({ name: "Hayat" });
// checkUnknown(true);
// checkUnknown(() => console.log("Funksiya ishlayapti"));
// checkUnknown(undefined);
// * 8. Class ichida private, public, protected o‘zgaruvchilar
var CarSpace;
(function (CarSpace) {
  class Car {
    constructor(config) {
      this.brand = config.brand;
      this.model = config.model;
      this.maxSpeed = config.maxSpeed;
      this.basePrice = config.basePrice;
      this.manufactureYear = config.manufactureYear;
      this.color = config.color;
      this.fuelType = config.fuelType;
      this.isElectric = config.isElectric;
    }
    getCarInfo() {
      return `${this.brand} ${this.model} (${this.manufactureYear}) - Max Speed ${this.maxSpeed} km/h`;
    }
    getInternalCode() {
      return `${this.brand.slice(0, 2).toUpperCase()}-${
        this.manufactureYear
      }-${Math.floor(this.basePrice / 1000)}`;
    }
    getFuelDetails() {
      console.log(`Fuel Type: ${this.fuelType}, Electric ${this.isElectric}`);
    }
  }
  CarSpace.Car = Car;
})(CarSpace || (CarSpace = {}));
const car_1 = new CarSpace.Car({
  brand: "BMW",
  model: "M5 F90",
  maxSpeed: 305,
  basePrice: 120000,
  color: "black",
  fuelType: "petrol",
  isElectric: false,
  manufactureYear: 2017,
});
class Circle {
  constructor() {}
  draw() {
    return "Hello, I am circle";
  }
}
const circle = new Circle();
// console.log(circle.draw());
// * 10. Class vorisligi (extends) orqali meros olish
var AnimalSpace;
(function (AnimalSpace) {
  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    eat() {
      console.log(`${this.name} is eating...`);
    }
    sleep() {
      console.log(`${this.name} is sleeping...`);
    }
  }
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
    bark() {
      console.log(`${this.name} is barking! Woof Woof!`);
    }
    fetch() {
      console.log(`${this.name} is fetching the ball...`);
    }
  }
  const myDog = new Dog("Max", 4, "Labrador");
  //   myDog.bark();
  //   myDog.eat();
  //   myDog.sleep();
  //   myDog.fetch();
})(AnimalSpace || (AnimalSpace = {}));
// * 11. Generic funksiyani yozish
function genericFunc(value) {
  return value;
}
// console.log(genericFunc("Hello"));
// console.log(genericFunc(12));
// * 12. Arraydagi sonlardan juftlarini filtrlaydigan generic funksiya
function returnEvens(nums) {
  return nums.filter((item) => item % 2 === 0);
}
const personcha2 = {
  name: "David",
  age: 27,
  //   is_healthy: true,
};
const me = {
  name: "Doniyor",
  age: 16,
};
// console.log(me);
// * 15. Namespace yordamida kodni bo‘lish
var MathSpace;
(function (MathSpace) {
  MathSpace.add = (n1, n2) => {
    return n1 + n2;
  };
  MathSpace.subtract = (n1, n2) => {
    return n1 - n2;
  };
  MathSpace.multiply = (n1, n2) => {
    return n1 * n2;
  };
  MathSpace.divide = (n1, n2) => {
    return n1 / n2;
  };
})(MathSpace || (MathSpace = {}));
// console.log(MathSpace.add(1, 2));
// console.log(MathSpace.divide(1, 2));
// console.log(MathSpace.multiply(1, 2));
// console.log(MathSpace.subtract(1, 2));
// * 16. readonly array ishlatish
const rgb = ["red", "green", "blue"];
// console.log(rgb);
// rgb.push("gray");
// rgb.pop();
// rgb[0] = "black";
// * 17. Method dekoratorini yozish (@Log)
function Log(target, propertyName, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Method "${propertyName}" called with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method "${propertyName}" returned:`, result);
    return result;
  };
  return descriptor;
}
class Example {
  sayHello(name) {
    return `Hello, ${name}`;
  }
}
__decorate([Log], Example.prototype, "sayHello", null);
const example = new Example();
// example.sayHello("Doniyor");
// * 18. Type narrowing: typeof va instanceof bilan ishlash
function func(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (value instanceof Number) {
    return value * 2;
  }
  return value;
}
console.log(func("Salom"));
console.log(func(42));
console.log(func(true));
// * 19. Generic interfeys bilan API javobini model qilish
var WorkingWithApi;
(function (WorkingWithApi) {
  async function getPosts() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return {
      data,
      success: res.ok,
    };
  }
  // getPosts<IPostRes>().then((res) => {
  //   if (res.success) {
  //     console.log("Posts: ", res.data.posts);
  //   } else {
  //     console.log("Xato.");
  //   }
  // });
})(WorkingWithApi || (WorkingWithApi = {}));
// * 20. Dekorator yordamida funksiyaning ishlash vaqtini o‘lchash
function Timer(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args) {
    const startTime = performance.now();
    const result = await originalMethod.apply(this, args);
    const endTime = performance.now();
    const execTime = endTime - startTime;
    console.log(`${propertyKey} executed in ${execTime}ms`);
    return result;
  };
  return descriptor;
}
class MyClass {
  async myMethod() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Method completed";
  }
}
__decorate([Timer], MyClass.prototype, "myMethod", null);
const instance = new MyClass();
instance.myMethod().then((result) => console.log(result));
