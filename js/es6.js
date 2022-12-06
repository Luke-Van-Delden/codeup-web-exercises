/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];


// TODOne: fill in your name and email and add some programming languages you know
// to the languages array
// TODOne: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Luke Van Delden';
const email = 'vandelden.luke@gmail.com';
const languages = ['CSS', 'Java', 'HTML', 'JQuery'];

// Reassigning
// let name = 'John';

// console.log(users);

// TODOne: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODOne: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

// One line from david
// users.forEach(({email}) => emails.push(email));


const pushEmail = user => emails.push(user.email);
users.forEach(pushEmail);
const pushNames = user => names.push(user.name);
users.forEach(pushNames);

// console.log(emails);
// console.log(names);



// TODOne: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({ name, email, languages }) => {
  // TODOne: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // users.forEach(function(user) {
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // Deconstructed
  // const { name, email, languages } = user

  // TODOne: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});
// console.log(developers)

// TODOne: Use `let` for the following variable
let list = '<ul>';

// TODOne: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers){

  // TODOne: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });

  list +=`<li>${developer}</li>`;
};

document.querySelector('#insert').innerHTML += list;