import got from "got";
require('dotenv').config();
const PARTNER_SERVICE_URI = "http://192.168.1.102:8069/api";

const httpheaders = {
    'access_token': process.env.TOKEN_ODOO
}

export default class PartnerService{
    
    static async fetchPartner(){
        const body = await got.get(`${PARTNER_SERVICE_URI}/res.partner`,{headers:httpheaders}).json();

        return body.data;
    }
}