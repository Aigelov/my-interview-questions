// #2 --------------------------------------

const user = {};
const users = [];

function createUser (name) {
  user.name = name;
  console.log('New user: ', user.name);
  users.push(user);
}

createUser('Homer');
createUser('Bart');

console.log('All users:');
console.log(users);