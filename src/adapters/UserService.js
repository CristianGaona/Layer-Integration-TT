import got from "got";

const USER_SERVICE_URI = "http://192.168.1.102:8080/api/v1";

export default class UserService{
    
    static async fetchUser(){
        const body = await got.get(`${USER_SERVICE_URI}/users`).json();

        return body.users;
    }

    static async createUser({name, lastName, dni, email, cellNumber, password, role, img}){
        const body = await got.post(`${USER_SERVICE_URI}/users`,{
            json: { name, lastName, dni, email, cellNumber, password, role, img}
        }).json();

        const {error_description, user} = await body;
        if (error_description) throw new AuthenticationError(error_description);
        console.info({user})
        return user;
    
        //return body;
    }

}



