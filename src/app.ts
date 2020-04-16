type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

const e1: ElevatedEmployee = {
  name: "eady",
  privileges: ["create-server"],
  startDate: new Date(),
};

type ElevatedEmployee = Admin & Employee;

type UnkownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnkownEmployee) {
  console.log("name: " + emp.name);

  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("privileges: " + emp.startDate);
  }
}

printEmployeeInfo({ name: "dave", startDate: new Date() });

class Truck {
  drive() {
    console.log("drive truck....");
  }

  loadCargo(amount: number) {
    console.log("load cargo..." + amount);
  }
}

class Car {
  drive() {
    console.log("drive....");
  }
}

const v1 = new Car();
const v2 = new Truck();
type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1234);
  }
}

useVehicle(v1);
useVehicle(v2);

type Combineable = string | number;
type Numeric = number | boolean;
type universal = Combineable & Numeric;

function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combineable, b: Combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('eady', 'daisy');
result.split(' ');



const fetchUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'CEO', description: 'My own company'}
};

console.log(fetchUserData.job && fetchUserData.job.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);






// interface Bird {
//     type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
// switch (animal.type){
//     case 'bird':
//         speed = animal.flyingSpeed;
//         break;
//     case 'horse':
//         speed = animal.runningSpeed;
// }
// console.log('moving with speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10})

// // const userInput = <HTMLInputElement>document.getElementById('user-input');



// //  const userInput = document.getElementById('user-input') as HTMLInputElement;

// //  userInput.value = 'Hi there';

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
// email: 'not a valed email',
// username: 'must start with a capital'
// };
