// Question 30 Hello admin:
let user_names = ['maliha', 'madiha', 'maria', 'marahila', 'maham'];
for (let username of user_names) {
  if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
  } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
