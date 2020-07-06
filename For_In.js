/**
 * for..in iterates through the properties of an object. code is executed as many times as many properties in object.
 */

let students = {
    name : 'Alex',
    age : 22,
    degree : 'Masters'
};
for (let item in students) {
    console.log(students[item]);
}