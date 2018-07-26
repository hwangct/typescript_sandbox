class Animal {
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        console.log(this.name + ' is owned by ' + this.owner);
    }

    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    private _weight: number;
    get weight(): number {
        return this._weight;
    }
    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
console.log(' Spots weight is ' + spot.weight);
console.log('# of Animals : ' + Animal.howManyAnimals());

class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");
console.log('# of Animals: ' + Animal.howManyAnimals());
console.log("Is ia Dog an Animal: " + (grover instanceof Animal));
console.log('Does grover have a name: ' + ('name' in grover));

/* Generic Class*/
class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}

var aStrNum = new GenericNumber<string>();

aStrNum.add = (x, y) => String(Number(x) + Number(y))

console.log(aStrNum.add('5','6'));