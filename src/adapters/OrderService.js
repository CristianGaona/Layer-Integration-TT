import got from 'got'

const ORDER_SERVICE_URI = "http://localhost:9000/api/v1";

export default class OrderService{

    static async createOrder({id_client, wishes, id_sale, total, status} ){
        console.log(wishes)
        const body = await got.post(`${ORDER_SERVICE_URI}/orders`,{
            json: {id_client, wishes, id_sale, total, status}
        }).json();

        return body;
    }
}