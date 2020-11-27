class Customer {
    _firstName: string;
    _lastName: string;


    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
}

// let's create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer._firstName);
console.log(myCustomer._lastName);