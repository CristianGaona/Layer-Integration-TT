import got from 'got';
const CLIENT_SERVICE_URI = "http://localhost:5000/devops/microservice/clients"

export default class ClientService {
 
    static async createClient({dni, nombre, apellido, direccion, correo, vendedor_id}){
        console.log("LLEGO AQUI")
        const body = await got.post(`${CLIENT_SERVICE_URI }/save`,{
            json:{dni, nombre, apellido, direccion, correo, vendedor_id}
        }).json();
        console.info({body})
       return body;

    }


    
}