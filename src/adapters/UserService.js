import got from "got";

const USER_SERVICE_URI = "http://192.168.1.102:8080/api/v1";

export default class UserService{
    
    static async fetchUser(){
        const body = await got.get(`${USER_SERVICE_URI}/users`).json();

        return body.users;
    }
}



