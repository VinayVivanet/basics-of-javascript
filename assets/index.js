// This is a comments section 
// console.log('Vivanet Org');
/*
let firstName='Vinay';
let orgName='Vivanet';
let age=30;
console.log(firstName+' '+orgName+' age= '+age);
age=40;
console.log(age);

const pi=3.14;
console.log(pi);
// pi=12; will give and error as this is constant

let team=null;
console.log(team);
if(team == null) {
    team = {};
    console.log(team);
}

let person = {
    firstName: 'Vinay',
    org: 'Vivanet',
    age: '30'
}

console.log(person);

// dot notation
update object value
person.firstName='Sachin';
//Access obbject value
console.log(person.firstName);

// Bracket Notation 
person['org']='Vivanet Org';
console.log(person);

//Arrays
// let teams = [];
let teams= ['team1', 'team2'];
console.log('teams : ' + teams);

console.log(teams.length);
teams[0]='teamName1';
teams[2]=1;
teams[3]=true;
console.log(teams);
//Access first element from Array
console.log(teams[0]);
*/


//function
function print(name) {
    console.log(name);
}

function add(firstValue, secondValue) {
    let result = firstValue + secondValue;
    return result;
}

function newAdd(firstValue, secondValue) {
    return firstValue + secondValue;
}

print('Vivanet');
let parentResult = add(2,2);
print(parentResult);

print(add(10,10));

print(newAdd(50,50));











