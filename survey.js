const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable 👌", (nickname) => {
  console.log(`I love the name ${nickname}`);
  rl.question('What is your favourite hobby?', (hobby) => {
    console.log(`Interesting, I always was curious about ${hobby}`);
    rl.question("What do you listen to while enjoying your favourite hobby?", (music) => {
      console.log(`Great! I will have to search up ${music} on my own sometime!`);
      rl.question("Which meal is your faourite? (eg: dinner, brunch, etc.)", (meal) => {
        console.log(`You're making me hungry, I could go for some ${meal} right now!`);
        rl.question(`What is your favourite thing to eat with ${meal}?`, (food) => {
          console.log(`${food} sure does go well with ${meal}`);
          rl.question("What sport is your favourite?", (sport) => {
            console.log(`Wouldn't it be nice to enjoy ${sport} all year around?`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log("You've got some great qualities, here's how I would sum it up:");
              console.log(`Yo wassup, my name is, ${nickname}! I like to listen to ${music} while I ${hobby}.`);
              console.log(`My favourite food is ${food} so you know I'm always down to grab some ${meal}!`);
              console.log(`I am amazing at ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });

});