interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheels: number) {}

    drive(): void {
        console.log('The car drives with ' + this.wheels + ' wheels');
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number) {

    }

    drive(): void {
        console.log('The bicycle drives with ' + this.wheels + ' wheels');
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();

/* Generic function */
function GetWheels<w extends Vehicle>(veh: w): number {
    return veh.drive();
}

GetWheels(car);
GetWheels(bike);
