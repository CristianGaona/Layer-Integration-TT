import got from 'got';
const CAR_SERVICE_URI = "https://app-cars-microservice.herokuapp.com/api/v1"
//const CAR_SERVICE_URI = "http://localhost:5000/api/v1"
export default class CarService {
    static async getCars(){
        const body = await got.get(`${CAR_SERVICE_URI}/cars`).json();
        return body;
    }

    static async deleteCar(id){
        const body = await got.delete(`${CAR_SERVICE_URI}/cars/${id}`).json();
        return "El vehiculo ha sido eliminado";
    }
    
}