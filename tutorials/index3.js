let person = {
    name: "Sophie",
    age: 20
};

console.log(person);    

// Dot Notation
person.name = "Mia";
console.log(person.name);   

// Bracket Notation
person['name'] = "Mary";
console.log(person.name);

// Bracket Notation
let selection = 'name';
person[selection] = "Joe";
console.log(person.name);
