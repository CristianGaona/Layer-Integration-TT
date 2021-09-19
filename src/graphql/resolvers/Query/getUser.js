import UserService from "#root/adapters/UserService";
const getUserResolver = async (_,{}, ctx) =>{
    return await UserService.fetchUser();  
};

export default  getUserResolver;
