module.exports = `
input UserInput {
  username: String!
  password: String!
  email: String!
}

type User {
  id: ID!
  username: String!
  password: String!
  email: String!
}

type Query {
  getUser(id: ID!): User
}
`;

// type Mutation {
//   createUser(input: UserInput): User
//   updateUser(id: ID!, input: UserInput): User
// }
///

// mutation CreateUser($data:UserInput!) {
//   createUser(data:$data) {
//     username
//     password
//     email
//   }
// }
