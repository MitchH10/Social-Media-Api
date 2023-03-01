const users = [
  {
    username: "Mitch",
    email: "mitch@gmail.com",
  },
];

const thoughts = [
  {
    thoughtText: "I love my dog",
    username: "Mitch",
    reactions: [
      {
        reactionBody: "She's adorable",
        username: "bobby",
      },
    ],
  },
];

module.exports = { users, thoughts };
