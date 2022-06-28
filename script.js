// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log('Same value on both');
console.log(age, age2);
age = 200;
console.log('Value gets copied');
console.log(age, age2);

let name = 'Christian';
let name2 = 'Kopac';
console.log(name, name2);
name = 'Christina'
console.log(name, name2)

// numbers, strings and booleans get copied

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.splice();
team2[3] = 'Lux';
console.log(team2);

// or create a new array and concat the old one in
team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'hee waa';
console.log(team4);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Christian Kopac',
    age: 80
}

// and think we make a copy:
const captain = person;
captain.number = 99;

// how do we take a copy instead?
const capt2 = Object.assign({}, person, { number: 99 });
console.log(cap2);

// We will hopefully soon see the object ...spread
const capt3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const chris = {
    name: 'Christian',
    age: 100,
    social: {
        twitter: @teatang,
        facebook: 'christian.kopac'
    }
}
console.clear();
console.log(chris);

const dev = Object.assign({}, chris);