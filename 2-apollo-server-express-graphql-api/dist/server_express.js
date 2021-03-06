"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var cors_1 = __importDefault(require("cors"));
var schema_1 = __importDefault(require("./schema"));
var app = express_1.default();
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    playground: true,
});
app.use("*", cors_1.default());
server.applyMiddleware({ app: app, path: "/graphql" });
app.listen({ port: 8000 }, function () {
    console.log("Apollo Server on http://localhost:8000/graphql");
});
