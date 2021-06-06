import got from 'got';
const CAR_SERVICE_URI = "https://app-cars-microservice.herokuapp.com/api/v1"
//const CAR_SERVICE_URI = "http://localhost:5000/api/v1"
export default class CarService {

    static async createCar({marca, modelo, anio, puertas, color, transmision, existencia, precio}){
        const body = await got.post(`${CAR_SERVICE_URI}/cars`, {
            json:{marca, modelo, anio, puertas, color, transmision, existencia, precio}
        }).json();
        return body;
    }

    static async getCars(){
        const body = await got.get(`${CAR_SERVICE_URI}/cars`).json();
        return body;
    }

    static async getCarId(id){
        const body = await got.get(`${CAR_SERVICE_URI}/cars/${id}`).json();
        return body;
    }

    static async deleteCar(id){
        const body = await got.delete(`${CAR_SERVICE_URI}/cars/${id}`).json();
        return "El vehiculo ha sido eliminado";
    }

    static async updateCar({id, marca, modelo, anio, puertas, color, transmision, existencia, precio}){
        console.log(id)
        const body = await got.put(`${CAR_SERVICE_URI}/cars/${id}`, {
            json:{id, marca, modelo, anio, puertas, color, transmision, existencia, precio}
        }).json();
        console.log(body)
        return body;
    }
    
}