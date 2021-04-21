import { ApolloServer } from 'apollo-server-express';
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import accessEnv from "#root/helpers/accessEnv";

import formatGraphQLErrors from "./formatGraphQLErrors";

const PORT = accessEnv("PORT", 7000);
const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../../.env'});

const apolloServer = new ApolloServer({
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs,
    context: ({req}) =>{
        const token = req.headers['authorization'] || '';
        if (token){
            try {
                const user = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETEORPRIVATEKEY);
                return{
                    user
                }
            } catch (error) {
                console.log('There was a mistake');
                console.log(error);
            }
        }
    }
    
})

const app = express();

app.use(cookieParser());

app.use(
    cors({
        origin: (origin, cb)=> cb(null, true),
        Credentials: true
    })
)

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql"});

app.listen(PORT, "0.0.0.0", () =>{
    console.info(`API Gateway listening on ${PORT}`);
})