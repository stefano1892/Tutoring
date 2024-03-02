class Person3 {
    /*
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    */

    constructor(private name: string, private age: number) {}

    getDetails() {
        return `${this.name} is ${this.age} years old`
    }
}

const personClass3 = new Person3('Max', 30)

personClass3.getDetails()