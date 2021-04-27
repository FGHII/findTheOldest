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

let oldestPerson = people.reduce(function (oldest, current) {
  function getAge(person) {
    if (!person.yearOfDeath) {
      age = new Date().getFullYear() - person.yearOfBirth;
      console.log(age)
    } else {
    age = person.yearOfDeath - person.yearOfBirth;
    };
    return age;
  }
  oldestAge = getAge(oldest);
  currentAge = getAge(current);
  if (currentAge > oldestAge) {
    return oldest = current;
  } else {
    return oldest;
  }
});
  console.log(oldestPerson);
}
findTheOldest();
