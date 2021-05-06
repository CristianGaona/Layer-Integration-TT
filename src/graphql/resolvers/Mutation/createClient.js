import ClientService from "#root/adapters/ClientService"

const createClientResolver = async (_, { input }, ctx)=>{
    const {dni, nombre, apellido, direccion, correo} = input;
    const vendedor_id = ctx.user.uid;

    const clientsession = await ClientService.createClient({dni, nombre, apellido, direccion, correo, vendedor_id});
    

    return clientsession;

};

export default createClientResolver;

