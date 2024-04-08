const person = {
  name: 'Raissa',
  age: 33,
  hobbies: ['Lift weights', 'Annoy Sisters']
};
let favoriteActivities: string[];

//Simulate TS Errors: 
//favoriteActivities = 'Sports';
//favoriteActivities = ['Sports'];
//console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //Simulate TS Error:
  //console.log(hobby.map());
}
