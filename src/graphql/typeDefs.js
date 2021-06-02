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
        name: String
        display_name: String
        vat: String
        id: ID
        website: String
        parent_name: String
        email: String
        street: String 
        street2: String
        city: String
        phone: String
        mobile: String
    }

    type Car {
        anio: Int
        color: String
        creado: String
        existencia: Int
        id: ID
        marca: String
        modelo: String
        precio: Int
        puertas: String
        transmision: String
    }

    type Order {
        id: ID
        wishes: [OrderGroup]
        total: Int
        id_client: String
        id_sale: String
        create_at: String
        status: OrderStatus
    }

    type OrderGroup{
        id_producto: String
        total: Int
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

    input  PartnerInput{
        name: String
        parent_id: Int
        vat: String
        website: String
        street: String 
        street2: String
        city: String
        email: String
        phone: String
        mobile: String
    }

    input OrderInput{
        wishes: [OrderProductInput]
        total: Int
        id_client: String
        status: OrderStatus
    }

    enum OrderStatus{
       PENDIENTE
       COMPLETADO
       CANCELADO
    }

    input OrderProductInput{
        id_producto: String
        total: Int
    }

    
    type Token {
        token: String
    }

    type Data {
        data: String
    }

    #Queries an Mutations
    type Query {
        partner: [Partner!]!
        user: [User!]!
        getUser: User
        getClientUser: [Client]
        getClientsUser:[Client]
        getCar: [Car]
        
    }

    type Mutation {
        authUser(input: AuthUserInput ): Token
        createUser(input: UserInput): User
        createClient(input: ClientInput): Client
        createPartner(input: PartnerInput): Partner
        createOrder(input: OrderInput): Order
    }


`;
export default typeDefs;