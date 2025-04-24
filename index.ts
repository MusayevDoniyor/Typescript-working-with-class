// * 1. Interfeys bilan foydalanuvchi ma'lumotlarini model qilish
// * 4. readonly maydonli interfeys
namespace PersonSpace {
  interface IPerson {
    readonly id: number;
    name: string;
    age: number;
    is_student: boolean;
    email?: string;
    greet(): string;
  }

  export class Person implements IPerson {
    constructor(
      readonly id: number,
      public name: string,
      public age: number,
      public is_student: boolean,
      public email?: string
    ) {}

    greet(): string {
      return `Hello, my name is ${this.name} and my id is ${this.id}`;
    }
  }
}

const personcha1 = new PersonSpace.Person(10078, "Doniyor", 16, true);
// console.log(personcha1);
// console.log(personcha1.greet());

// * 2. Funksiya turini yozish
namespace FunctionSpace {
  interface IFunction {
    (num: number, num2: number): number;
  }

  function getSumFunc(num: number, num2: number): number {
    return num + num2;
  }

  export const getSum: IFunction = getSumFunc;
}

// console.log(FunctionSpace.getSum(1, 10));

// * 3. void tipli funksiya
function logText(text: string): void {
  console.log("Text:", text);
}

// logText("Doniyor");

// * 5. Union turdagi tip yaratish
type Colors = "red" | "green" | "blue";
const product_color: Colors = "blue";

// console.log(product_color);

// * 6. never turli funksiya yozish
const returnError = (): never => {
  const random = Math.round(Math.random() * 100);
  console.log(random);

  if (random > 50) throw new Error("Random son 50 dan katta!").message;
  throw new Error("Random 50 dan kichik yoki teng").message;
};

// returnError();

// * 7. unknown tipli qiymatni ishlatish
const checkUnknown = (value: unknown): void => {
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
      (value as Function)();
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
namespace CarSpace {
  type Colors = "red" | "green" | "blue" | "black" | "white";
  type FuelTypes = "petrol" | "diesel" | "electric" | "hybrid";

  interface ICarConfig {
    brand: string;
    model: string;
    maxSpeed: number;
    color: Colors;
    fuelType: FuelTypes;
    manufactureYear: number;
    basePrice: number;
    isElectric: boolean;
  }

  interface IClassCar extends ICarConfig {
    getCarInfo(): string;
    getInternalCode(): string;
    getFuelDetails(): void;
  }

  export class Car implements IClassCar {
    public brand: string;
    public model: string;
    public maxSpeed: number;

    private basePrice: number;
    private manufactureYear: number;

    protected color: Colors;
    protected fuelType: FuelTypes;
    protected isElectric: boolean;

    constructor(config: ICarConfig) {
      this.brand = config.brand;
      this.model = config.model;
      this.maxSpeed = config.maxSpeed;
      this.basePrice = config.basePrice;
      this.manufactureYear = config.manufactureYear;
      this.color = config.color;
      this.fuelType = config.fuelType;
      this.isElectric = config.isElectric;
    }

    public getCarInfo() {
      return `${this.brand} ${this.model} (${this.manufactureYear}) - Max Speed ${this.maxSpeed} km/h`;
    }

    private getInternalCode() {
      return `${this.brand.slice(0, 2).toUpperCase()}-${
        this.manufactureYear
      }-${Math.floor(this.basePrice / 1000)}`;
    }

    protected getFuelDetails() {
      console.log(`Fuel Type: ${this.fuelType}, Electric ${this.isElectric}`);
    }
  }
}

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

// console.log(car_1.getCarInfo());
// console.log(car_1.getInternalCode());
// console.log(car_1.getFuelDetails());

// * 9. Interface ni classda implements qilish
interface ICircle {
  draw(): string;
}

class Circle implements ICircle {
  constructor() {}
  draw(): string {
    return "Hello, I am circle";
  }
}

const circle = new Circle();
// console.log(circle.draw());

// * 10. Class vorisligi (extends) orqali meros olish
namespace AnimalSpace {
  class Animal {
    constructor(public name: string, public age: number) {}

    public eat(): void {
      console.log(`${this.name} is eating...`);
    }

    public sleep(): void {
      console.log(`${this.name} is sleeping...`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, age: number, public breed: string) {
      super(name, age);
    }

    public bark(): void {
      console.log(`${this.name} is barking! Woof Woof!`);
    }

    public fetch(): void {
      console.log(`${this.name} is fetching the ball...`);
    }
  }

  const myDog = new Dog("Max", 4, "Labrador");
  //   myDog.bark();
  //   myDog.eat();
  //   myDog.sleep();
  //   myDog.fetch();
}

// * 11. Generic funksiyani yozish
function genericFunc<T>(value: T): T {
  return value;
}

// console.log(genericFunc("Hello"));
// console.log(genericFunc(12));

// * 12. Arraydagi sonlardan juftlarini filtrlaydigan generic funksiya
function returnEvens<T>(nums: T[]): T[] {
  return (nums as []).filter((item: number) => item % 2 === 0);
}

// console.log(returnEvens([12, 11, 5, 3, 7, 9, 8, 5, 4, 22, 3353, 585]));

// * 13. Partial utility type bilan obyekt
interface IPerson {
  name: string;
  age: number;
  is_healthy: boolean;
}

const personcha2: Partial<IPerson> = {
  name: "David",
  age: 27,
  //   is_healthy: true,
};

// console.log(personcha2);

// * 14. Pick utility type orqali ayrim maydonlarni ajratish
type PersonNameType = Pick<IPerson, "name" | "age">;
const me: PersonNameType = {
  name: "Doniyor",
  age: 16,
};

// console.log(me);

// * 15. Namespace yordamida kodni bo‘lish

namespace MathSpace {
  interface IFunc {
    (num1: number, num2: number): number;
  }

  export const add: IFunc = (n1, n2) => {
    return n1 + n2;
  };
  export const subtract: IFunc = (n1, n2) => {
    return n1 - n2;
  };
  export const multiply: IFunc = (n1, n2) => {
    return n1 * n2;
  };
  export const divide: IFunc = (n1, n2) => {
    return n1 / n2;
  };
}

// console.log(MathSpace.add(1, 2));
// console.log(MathSpace.divide(1, 2));
// console.log(MathSpace.multiply(1, 2));
// console.log(MathSpace.subtract(1, 2));

// * 16. readonly array ishlatish
const rgb: readonly string[] = ["red", "green", "blue"];
// console.log(rgb);
// rgb.push("gray");
// rgb.pop();
// rgb[0] = "black";

// * 17. Method dekoratorini yozish (@Log)
function Log(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method "${propertyName}" called with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method "${propertyName}" returned:`, result);

    return result;
  };

  return descriptor;
}

class Example {
  @Log
  sayHello(name: string) {
    return `Hello, ${name}`;
  }
}

const example = new Example();
// example.sayHello("Doniyor");

// * 18. Type narrowing: typeof va instanceof bilan ishlash
function func<T>(value: T): T {
  if (typeof value === "string") {
    return value.toUpperCase() as T;
  }

  if (value instanceof Number) {
    return (value * 2) as T;
  }

  return value;
}

console.log(func("Salom"));
console.log(func(42));
console.log(func(true));

// * 19. Generic interfeys bilan API javobini model qilish
namespace WorkingWithApi {
  interface ApiResponse<T> {
    data: T;
    success: boolean;
  }

  interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }

  interface IPostRes {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
  }

  async function getPosts<T>(): Promise<ApiResponse<T>> {
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
}

// * 20. Dekorator yordamida funksiyaning ishlash vaqtini o‘lchash
function Timer(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
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
  @Timer
  async myMethod() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Method completed";
  }
}

const instance = new MyClass();
instance.myMethod().then((result) => console.log(result));
