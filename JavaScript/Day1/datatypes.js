//without symbol

// let user = {
//   name: "Sri",
//   id: 1
// };

// user.id = 2;

// console.log(user.id); // 2

//WITH SYMBOL

let id = Symbol("id");

let user = {
  name: "Sri",
  [id]: 1
};
 
user.id = 2;
console.log(user[id]);  