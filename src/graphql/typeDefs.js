import { gql } from "apollo-server";

const typeDefs= gql`

    type User{
        uid: ID
        name: String
        lastName: String
        dni: String
        email: String
        cellNumber: String
        password: String
        role: String
        img: String

    }

    type Client{
        id: ID
        dni: String
        nombre: String,
        apellido: String,
        direccion: String,
        correo: String,
        vendedor_id: ID,
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

    input ClientInput{
        dni: String
       nombre: String
       apellido: String
       direccion: String
       correo: String

   }
    enum RoleUser{
       ADMIN_ROLE
       SALES_ROLE
       USER_ROLE
   }
    input UserInput{
        name: String
        lastName: String
        dni: String
        email: String
        cellNumber: String
        password: String
        role: RoleUser
        img: String
    }

    
    type Token {
        token: String
    }

    #Queries an Mutations
    type Query {
        partner: [Partner!]!
        user: [User!]!
        getUser: User
        getClientUser: [Client]
        getClientsUser:[Client]
        
    }

    type Mutation {
        authUser(input: AuthUserInput ): Token
        createUser(input: UserInput): User
        createClient(input: ClientInput): Client
    }


`;
export default typeDefs;