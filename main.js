// setTimeout(() => {
//   console.log("coffee");
// }, 3000);

// console.log("toast");
// console.log("eggs");

// const names = ["John", "Mary", "Bob"];
// const greet = names.map((name) => `Hello ${name}`);
// console.log(greet);

// function greeting(name) {
//   console.log(`Hello ${name}`);
// }

// let greeting = (name) => console.log(`Hello ${name}!`);

// greeting("John");

// let greeting = (name) => console.log(`Hello ${name}!`);

// const userInfo = (firstName, lastName, callback) => {
//   const fullName = `${firstName} ${lastName}`;
//   callback(fullName);
// };

// userInfo("John", "Doe", greeting);

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "marking meeting",
      location: "skype",
      time: "1 pm",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled"));
  }
});

meeting
  .then((res) => {
    // resolve data
    console.log("meeting scheduled");
    console.log(res);
  })
  .catch((err) => {
    // reject data
    console.log(err.message);
  });
