// objects are used to represent collections of key-value paires
let person = {
    name : "John Doe" ,
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA"
    },
    info: (name, age) => console.log(name, "-" ,age,)
};
console.log(person.name);
console.log(person.address.city);

person.age = 31;
person["age"] = 33;
person.gender = "M" ;
delete person.address;



