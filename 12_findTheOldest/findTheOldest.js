const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    if (!person.yearOfDeath) {
      person.age = new Date().getFullYear() - person.yearOfBirth;
    }
    else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
    if (!oldest.yearOfDeath) {
      oldest.age = new Date().getFullYear() - oldest.yearOfBirth;
    }
    else {
      oldest.age = oldest.yearOfDeath - oldest.yearOfBirth;
    }
    return oldest.age < person.age? person: oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
