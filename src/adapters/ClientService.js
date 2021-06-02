import got from 'got';
const CLIENT_SERVICE_URI = "http://localhost:9000/devops/microservice/clients"

export default class ClientService {
 
    static async createClient({dni, nombre, apellido, direccion, correo, vendedor_id}){
        console.log("LLEGO AQUI")
        const body = await got.post(`${CLIENT_SERVICE_URI }/save`,{
            json:{dni, nombre, apellido, direccion, correo, vendedor_id}
        }).json();
        console.info({body})
       return body;

    }

    static async getClients(id_vendedor){
        const body = await got.get(`${CLIENT_SERVICE_URI}/myClients/${id_vendedor}`).json();

        return body;
    }

    


    
}