import ClientService from "#root/adapters/ClientService"

const updateClientResolver = async (_, { id,input }, ctx)=>{
    const vendedor_id = ctx.user.uid
    console.log(vendedor_id)
    const {dni, nombre, apellido, direccion, correo} = input;
    console.log(id)
    const clientsession = await ClientService.updateClient({id, dni, nombre, apellido, direccion, correo, vendedor_id})
    console.log(clientsession)
    return clientsession;


}

export default updateClientResolver;