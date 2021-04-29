import  ClientService from "#root/adapters/ClientService";

const ClientsUserResolver = async (_, {}, ctx) =>{
    const id_vendedor = ctx.user.uid
    console.info(ctx.user.uid)
    return await ClientService.getClients(id_vendedor);   
};

export default  ClientsUserResolver;