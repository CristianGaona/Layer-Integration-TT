import { AuthenticationError } from "apollo-server-errors";
import got from "got";
//const fetch = require('node-fetch');
const AUTH_SERVICE_URI = "https://app-users-microservice.herokuapp.com/api/v1/auth";

export default class AuthUsers{

    static async authUser ({email, password}){
        const body = await got.post(`${AUTH_SERVICE_URI}/login`,{
            json: {email, password}
        }).json();
        const {error_description, token} = await body;
        if (error_description) throw new AuthenticationError(error_description);
        return token;

    }
}

//const auth = 'Basic ' + new Buffer.from("appFlutter:crisda24").toString('base64');

/*
//var querystring = require('querystring');
//import got from "got";
const httpheaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Authorization": auth,
    'content': 'application/json'
    
}

export default class AuthUsers{
    
    static async authUser({username, password}){
      
        const response = await fetch(`${AUTH_SERVICE_URI}/oauth/token`,{
            method: 'POST',
            headers:httpheaders,
            body: new URLSearchParams({
                username,
                password,
                grant_type: 'password'
            }).toString()
        });
        
        const {error_description, access_token} = await response.json();
        
        if (error_description) throw new AuthenticationError(error_description);
        return access_token;
    }



    
}*/



