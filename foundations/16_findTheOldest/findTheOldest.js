const CalculateAge = function(birth, death){
    return death ? death-birth : new Date().getFullYear()-birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        return CalculateAge(oldest.yearOfBirth,oldest.yearOfDeath) > CalculateAge(current.yearOfBirth,current.yearOfDeath) ?
        oldest:
        current;
    });

    // Bonus Solution! :D
    // let oldestPerson = {};
    // let oldestAge = 0;
    // 
    // people.forEach(person => {
    //     const yearOfDeath = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
    //     const age = yearOfDeath-person.yearOfBirth;
    //     if(age > oldestAge){
    //         oldestPerson = person;
    //         oldestAge = age;
    //     }
    // });
    // return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
