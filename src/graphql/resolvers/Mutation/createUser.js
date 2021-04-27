import UserService from "#root/adapters/UserService";

const createUserResolver = async (obj, { input }, context) => {
  
    const { name, lastName, dni, email, cellNumber, password, role, img} = input;
   
    const userSession = await UserService.createUser( {name, lastName, dni, email, cellNumber, password, role, img});

    return userSession
    
    
  };
  
  export default createUserResolver;