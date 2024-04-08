const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Raissa',
  age: 33,
  hobbies: ['Lift weights', 'Annoy Sisters'],
  role: [2, 'co-author']
};
let favoriteActivities: string[];

//Simulate TS Errors: 
//favoriteActivities = 'Sports';
//favoriteActivities = ['Sports'];
//console.log(person.name);

//Tuple
person.role.push('admin'); // push is an exception that is accepted in TS  

//This generates a error:
//person.role[1] = 10;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //Simulate TS Error:
  //console.log(hobby.map());
}



