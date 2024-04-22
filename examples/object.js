// TS' representation of an object type that helps TypeScript
// understand the objects you are working with
/* const person: {
    name: string;
    age: number;
} = {
    name: 'Tete',
    age: 31
} */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// js code:
var person = {
    name: "Tete",
    age: 31,
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("it is an admin");
}
