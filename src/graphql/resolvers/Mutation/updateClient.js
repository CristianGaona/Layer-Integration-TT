import ClientService from "#root/adapters/ClientService"

const updateClientResolver = async (_, { id,input }, ctx)=>{
    const vendedor_id = ctx.user.uid
    const {dni, nombre, apellido, direccion, correo} = input;
    const clientsession = await ClientService.updateClient({id, dni, nombre, apellido, direccion, correo, vendedor_id})
    return clientsession;


}

export default updateClientResolver;