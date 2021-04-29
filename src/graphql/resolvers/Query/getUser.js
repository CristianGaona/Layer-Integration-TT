
const getUserResolver = async (_,{}, ctx) =>{
    console.log("aAQUI")
    console.info(ctx.user)
    return ctx.user;  
};

export default  getUserResolver;
