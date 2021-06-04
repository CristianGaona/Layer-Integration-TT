import  ClientService from "#root/adapters/ClientService";

const GetClientResolver = async (_, {id}, ctx) =>{
    return await ClientService.getClientId(id);
}

export default GetClientResolver;