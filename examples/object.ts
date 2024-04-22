// TS' representation of an object type that helps TypeScript
// understand the objects you are working with
/* const person: {
    name: string;
    age: number;
} = {
    name: 'Tete',
    age: 31
} */

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// js code:
const person = {
  name: "Tete",
  age: 31,
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("it is an admin");
}
