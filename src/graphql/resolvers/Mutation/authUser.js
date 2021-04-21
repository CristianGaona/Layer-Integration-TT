import AuthUsers from "#root/adapters/AuthUsers";

const authUserResolver = async (obj, { input }, context) => {
  
  const { email, password} = input;
 
  const userSession = await AuthUsers.authUser( {email, password});

  //context.res.cookie("userSessionId", userSession.id, { httpOnly: true });
  // Crear token
  //console.log(userSession)
  return {
      token: userSession
  };
  
};

export default authUserResolver;