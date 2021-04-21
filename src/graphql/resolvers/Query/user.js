import  UserService from "#root/adapters/UserService";
const UserResolver = async () =>{
    return await UserService.fetchUser();   
};

export default  UserResolver;
/*module.exports = {
    UserResolver
}*/