const addShipping = (price: number, shipping: number) : number => {
    return price + shipping;
}
addShipping(11, 5);

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void
}

const account01: IAccount = {
    name: 'Sergio',
    balance: 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
    constructor(
        public name: string,
        public balance: number
    ) {}

    private withdraw() {}
}

class Queue<T> {
    private data: T[] = [];

    add(item: T) {
        this.data.push(item)
    }

    remove() {
        this.data.shift()
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Luis');
nameQueue.add('Andrei');

const numberQueue = new Queue<number>();
numberQueue.add(7);
numberQueue.add(11);

const MenuItem01 = (value: any) => {
    return class extends value {
        id = "abc";
    };
};

const MenuItem02 = (itemId: string) => {
    return (value: any) => {
        return class extends value {
            id = itemId;
        };
    };
};

@MenuItem01
class Pizza {
    id: string;
    
    constructor(id: string) {
        this.id = id;
    };
}

class ClazoneBase {
    id: string;
    // compila anche senza costruttore (npx tsc + nome file.ts, node + nome file.js)
}

@MenuItem02("burga buga")
class Hamburger {
    id: string | undefined;
}

@MenuItem02("Ringo people")
class Ringo {
    id: string = "";
}

class Cheetos {
    id?: string;
}

const Clazone = MenuItem01(ClazoneBase);

console.log(`This is Clazone Id: ${new Clazone().id}\n`);
console.log(`This is Pizza Id: ${new Pizza("Bulma").id}\n`);
console.log(`This is Hamburger Id: ${new Hamburger().id}\n`);
console.log(`This is Ringo Id: ${new Ringo().id}\n`);