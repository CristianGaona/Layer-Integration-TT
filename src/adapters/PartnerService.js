import got from "got";
import { AuthenticationError } from "apollo-server-errors";
const fetch = require('node-fetch');
require('dotenv').config();
const PARTNER_SERVICE_URI = "http://localhost:8069/api";

const httpheaders = {
    
    'access_token': process.env.TOKEN_ODOO
}

export default class PartnerService{
    
    static async fetchPartner(){
        const body = await got.get(`${PARTNER_SERVICE_URI}/res.partner`,{headers:httpheaders}).json();

        const {error_description, data, couter} = await body;
        if (error_description) throw new AuthenticationError(error_description);
        console.info({couter})
        return data;
    }

    static async createPartner({name, parent_id, vat, website, street, street2, city, email, phone, mobile}){
        //console.log(name)
        const body = await got.post(`${PARTNER_SERVICE_URI}/res.partner`,{
            
            headers:httpheaders,
            json:{name, parent_id, vat, website, street, street2, city, email, phone, mobile}
        }).json();
        
        const {error_description, data, count} = await body;
        if (error_description) throw new AuthenticationError(error_description);
        return body.data;

    }


   /* static async createPartner({name}){
      
        const response = await fetch(`${PARTNER_SERVICE_URI}/res.partner`,{
            //credentials: 'include',
            method: 'POST',
            headers:httpheaders,
            mode: 'cors',
            body: new URLSearchParams({
                name
            }).toString()
            
        });
        console.log(response)
        //response.headers.forEach(header => console.log(header));
        const {error_description, data} = await response.json();
        
        if (error_description) throw new AuthenticationError(error_description);
        return data;
    }*/


}