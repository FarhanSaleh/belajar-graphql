import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(_, args) {
      return db.reviews.find((value) => value.id == args.id);
    },
    game(_, args) {
      return db.games.find((value) => value.id == args.id);
    },
    author(_, args) {
      return db.authors.find((value) => value.id == args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((value) => value.game_id == parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((value) => value.author_id == parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((value) => value.id == parent.author_id);
    },
    game(parent) {
      return db.games.find((value) => value.id == parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((value) => value.id != args.id);
      return newgames;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000),
      };
      games.push(game);
      return game;
    },
    updateGame(_, args) {
      db.games = db.games.map((value) => {
        if (value.id == args.id) {
          return { ...value, ...args.edits };
        }
        return value;
      });
      return db.games.find((value) => value.id == args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
