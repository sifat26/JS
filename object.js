const person={
    name:'karim',
    salary:20000,
    age:20,
    profession:'developer',
    'desig nation':"doctor"

}
person.salary=2333333;
person['name']="Sifat";

console.log(person.name,person['age'],person['profession'],person['desig nation']);
const key='age';
console.log(person[key]);