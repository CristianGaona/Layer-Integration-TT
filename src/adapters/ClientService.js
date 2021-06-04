import got from 'got';
const CLIENT_SERVICE_URI = "http://localhost:9000/api/v1"

export default class ClientService {
 
    static async createClient({dni, nombre, apellido, direccion, correo, vendedor_id}){
        const body = await got.post(`${CLIENT_SERVICE_URI }/clients`,{
            json:{dni, nombre, apellido, direccion, correo, vendedor_id}
        }).json();
        console.info({body})
       return body;

    }

    static async getClientId(id){
        const body = await got.get(`${CLIENT_SERVICE_URI}/clients/${id}`).json();

        return body;
    }

    static async getClients(id_vendedor){
        const body = await got.get(`${CLIENT_SERVICE_URI}/clients/seller/${id_vendedor}`).json();

        return body;
    }


    static async updateClient({id, dni, nombre, apellido, direccion, correo, vendedor_id}){
        console.log(id)
        const body = await got.put(`${CLIENT_SERVICE_URI }/clients/${id}`,{
            json:{id, dni, nombre, apellido, direccion, correo, vendedor_id }
        }).json();
        console.log({body})
       return body;

    }



    static async deleteClient(id){
        const body = await got.delete(`${CLIENT_SERVICE_URI}/clients/${id}`).json();
        return "El cliente ha sido eliminado";
    }

    


    
}