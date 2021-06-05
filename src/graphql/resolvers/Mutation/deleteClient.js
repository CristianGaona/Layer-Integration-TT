import  ClientService from "#root/adapters/ClientService";

const DeleteClientResolver = async (_, {id}, ctx) =>{
    return await ClientService.deleteClient(id);
}

export default DeleteClientResolver;
