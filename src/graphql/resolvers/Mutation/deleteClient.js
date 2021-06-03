import  ClientService from "#root/adapters/ClientService";

const DeleteClientResolver = async (_, {id}, ctx) =>{
    // Id client
    console.log(id)
    return await ClientService.deleteClient(id);
}

export default DeleteClientResolver;
