const skills = {
    develop(projectName) {
        console.log(`${this.firstName} developed ${projectName}`);
    },
    design(projectName) {
        console.log(`${this.firstName} designed ${projectName}`);
    },
    sayHello() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
}

class DesignerAndDeveloper {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Object.assign(this, {...skills });
    }
}

const john = new DesignerAndDeveloper("John", "Doe");
john.design("XYZ");
john.develop("XYZ");
john.sayHello();