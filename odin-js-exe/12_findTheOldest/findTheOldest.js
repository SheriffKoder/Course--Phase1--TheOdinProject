

const findTheOldest = function(input) {

    let temp = {
        age:0 , 
        index:0, };

    for (person in input) {

        let current_birth = input[person].yearOfBirth;
        let total_years;

        if (input[person].yearOfDeath) {
            total_years = input[person].yearOfDeath;
        }
        else {
            total_years = new Date().getFullYear();
        }

        let current_age = total_years - current_birth;

        console.log("this is "+ input[person].name + "of age " + current_age);

        if (current_age > temp.age) {
            temp.age = current_age;
            temp.index = person;
        }


    }

    return input[temp.index];
};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


 // console.log(findTheOldest(people));

// Do not edit below this line

module.exports = findTheOldest;



/*
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};


*/