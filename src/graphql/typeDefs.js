import { gql } from "apollo-server";

const typeDefs= gql`

    type User{
        uid: String!
        name: String!
        lastName: String!
        email: String!

    }
    
    type Partner {
        name: String!
        id: ID!
        website: String!
        parent_name: String!
        email: String!
    }

    input AuthUserInput {
        email: String
        password: String
    }
    type Token {
        token: String
    }

    #Queries an Mutations
    type Query {
        partner: [Partner!]!
        user: [User!]!
        
    }

    type Mutation {
        authUser(input: AuthUserInput ): Token
    }


`;
export default typeDefs;