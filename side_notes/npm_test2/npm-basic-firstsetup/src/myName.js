
export default class User {
    constructor (age,name) {
        this.age = age;
        this.name = name;
    }
}

const myName = (name) => 'Hi! My name is ' + name;
const myName2 = (name) => 'Hi! My name is ' + name;

//export default User;        
//exporting both and can not use and use in the declaration
//can default export one thing
export {
    myName, 
    myName2
};
