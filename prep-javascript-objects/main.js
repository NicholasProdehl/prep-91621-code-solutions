const person = {
  firstName: 'Patrice',
  lastName: 'Prodehl',
  hobby: 'Traveling'
};

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Youtuber';
console.log("The person's current job is: ", person.job);

person.previousJob = 'Mother';
console.log("The person's previous job was: ", person.previousJob);

console.log('The complete person object is: ', person);
