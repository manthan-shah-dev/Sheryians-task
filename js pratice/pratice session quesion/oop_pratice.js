// Question 1 — Understanding this in an Object
console.log("Question 1 — Understanding this in an Object")
const user1 = {
    name: "Ritik",
    greet() {
        console.log(this.name);
    }
};

user1.greet();

// Question 2 — Default Binding
console.log('Question 2 — Default Binding')
function show() {
    console.log(this);
}
show();

// Question 3 — call()
console.log('Question 3 — call()')
function introduce() {
    console.log(this.name)
}
const person = {
    name: 'Ritik'
}

introduce.call(person)



// Question 4 — apply()
console.log('Question 4 — apply()')


function introduce4(city, country) {
    console.log(`${this.name} from ${city}`);
}
const person4 = {
    name: "Ritik"
}

introduce4.apply(person4, ['bhopal']);


// Question 5 — Fix Lost this
console.log('Question 5 — Fix Lost this')
const user5 = {
    name: "Ritik",
    greet() {
        console.log(this.name);
    }
};
const fn = user5.greet.bind(user5);
fn();

// The code prints:
// undefined

// Fix it using bind() .

// Question 6 — Create an Inheritance Chain
console.log('Question 6 — Create an Inheritance Chain')

const animal = {
    eats: true
};


const dog = Object.create(animal)
// using Object.create() .
// The dog object should inherit:
// eats

// from animal.
console.log(dog.eats)

// Question 7 — Prototype Method
console.log('Question 7 — Prototype Method')

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
console.log(Person.prototype.greet)

// Question 8 — Student Class System
console.log('Question 8 — Student Class System')

class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }
    getGrade() {
        if (this.marks > 90) return 'A'
        else if (this.marks > 75) return 'B'
        else if (this.marks > 60) return 'C'
        else return 'fail'
    }
}


const student1 = new Student('manthan', 89)
console.log(student1.getGrade())


// Question 9 — Employee Inheritance
console.log('Question 9 — Employee Inheritance')
class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    work() {
        console.log(`name:${this.name} is working and his salary ${this.salary}`)
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }
    code() {
        console.log(`${this.name} is coding.....`)
    }
}

const d1 = new Developer('manthan', ' ₹10,20,000')
d1.work();
d1.code();


// Question 10 — Bank Account (Interview-Level)
console.log("Question 10 — Bank Account (Interview-Level)")

class BankAccount {
    #balance = 0
    
    
    deposit(amount) {
        if (amount >= 0)
             {
                 this.#balance = amount + this.#balance 
                }
        else {
            console.warn('Aukaat me raho,negative number cannot be deposite')
        }
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance = this.#balance - amount
        }
        else {
            console.warn('Aukaat me raho,account me balance nahi hai aur withdraw karna hai')

        }
    }
    getBalance() {return this.#balance
    }

}
function printbalance(balance){if (balance >= 10000) {
    console.log(`Bhai sahab 😎💰 bade log! Paisa hi paisa hai — Balance: ₹${balance}`);
} else if (balance > 0) {
    console.log(`Bhai sambhal ke 😂 EMI bhi bharni hai — Balance: ₹${balance}`);
} else {
    console.log(`Bhai account dekh ke bank bhi ro raha hai 😭😂 — Balance: ₹${balance}`);
}}

const p1 = new BankAccount()
p1.deposit(10000)
p1.withdraw(0)
let balance=p1.getBalance()

printbalance(balance)


// 🎯 Bonus Challenge (Very Hard)
console.log("🎯 Bonus Challenge (Very Hard)");

class Book {
    constructor(title, author, borrowed = false) {
        this.title = title;
        this.author = author;
        this.borrowed = borrowed;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        let book = new Book(title, author);
        this.books.push(book);

        console.log(`📚 Book added: ${title} by ${author}`);
    }

    borrowBook(title) {
        let book = this.books.find(book => book.title === title);

        if (!book) {
            console.log(`❌ Bhai ye book library me hai hi nahi 😂`);
        } 
        else if (book.borrowed) {
            console.log(`😅 Bhai "${title}" already borrowed hai`);
        } 
        else {
            book.borrowed = true;
            console.log(`📖 "${title}" borrow kar li bhai 😎`);
        }
    }

    returnBook(title) {
        let book = this.books.find(book => book.title === title);

        if (!book) {
            console.log(`❌ Bhai ye book library me hai hi nahi`);
        } 
        else if (!book.borrowed) {
            console.log(`😂 Bhai "${title}" pehle se library me hai`);
        } 
        else {
            book.borrowed = false;
            console.log(`📚 "${title}" successfully return kar di`);
        }
    }

    showAvailableBooks() {
        let availableBooks = this.books.filter(book => !book.borrowed);

        console.log("📚 Available Books:");

        availableBooks.forEach(book => {
            console.log(`${book.title} — ${book.author}`);
        });
    }
}

const library = new Library();

library.addBook("JavaScript", "Ritik");
library.addBook("Clean Code", "Robert Martin");
library.addBook("Atomic Habits", "James Clear");

library.showAvailableBooks();

library.borrowBook("JavaScript");

library.showAvailableBooks();

library.returnBook("JavaScript");

library.showAvailableBooks();