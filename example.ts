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

let sccounts: IAccount[];

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