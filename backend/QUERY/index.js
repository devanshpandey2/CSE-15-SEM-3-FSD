program
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    user(id: ID!): User
  }
`);

// Sample data
const users = [
  { id: "7", name: "ayz", email: "ayz@example.com" },
  { id: "8", name: "abc", email: "abc@example.com" },
];

// Resolvers
const root = {
  hello: () => "Hello, GraphQL!",

  user: ({ id }) => {
    return users.find((user) => user.id === id);
  },
};

const app = express();

app.use(
  "/graphql",
  graphlet({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("GraphQL API running at http://localhost:4000/graphql") 
});