let findTheOldest = function() {
  const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]
//iterate through each item in Object by index number, run age calculation function (reduce?) then compare to
//current highest age
let oldestPerson = {};
let highestAge = 0;
people.forEach(function(person) {
age = person.yearOfDeath - person.yearOfBirth;
console.log(person.name);
console.log(age);
if (age > highestAge) {
  highestAge = age;
  oldestPerson = person;
  console.log(person);
}
});
}
findTheOldest();
// module.exports = findTheOldest
