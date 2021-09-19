import got from "got";
import { SyntaxError } from "apollo-server-errors";
require('dotenv').config();
const PARTNER_SERVICE_URI = "http://localhost:8069/api";

const httpheaders = {

    'access_token': process.env.TOKEN_ODOO
}

export default class PartnerService {

    static async fetchPartner() {
        const body = await got.get(`${PARTNER_SERVICE_URI}/res.partner`, { headers: httpheaders }).json();
        const { error_description, data } = await body;
        if (error_description) throw new SyntaxError(error_description);
        return data;
    }

    static async createPartner({ name, parent_id, vat, website, street, street2, city, email, phone, mobile }) {
        const body = await got.post(`${PARTNER_SERVICE_URI}/res.partner`, {
            headers: httpheaders,
            json: { name, parent_id, vat, website, street, street2, city, email, phone, mobile }
        }).json();

        const { error_description } = await body;
        if (error_description) throw new SyntaxError(error_description);
        return 'partner created successfully';

    }

}