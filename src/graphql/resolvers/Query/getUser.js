//import  UserService from "#root/adapters/UserService";
const getUserResolver = async (_,{}, ctx) =>{
    console.log("aAQUI")
    console.info(ctx.user)
    return ctx.user;
    //return await UserService.fetchUser();   
};

export default  getUserResolver;



// Obtener usuario
/*obtenerUsuario: async(_,{}, ctx) =>{
    //const usuarioId = await jwt.verify(token, process.env.SECRETA)
    //return usuarioId;
    
},*/