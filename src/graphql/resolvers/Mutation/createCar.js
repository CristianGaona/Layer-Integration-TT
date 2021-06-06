import CarService from "#root/adapters/CarService";

const createCarResolver = async (_, { input }, ctx)=>{
    const {marca, modelo, anio, puertas, color, transmision, existencia, precio} = input;

    const carsession = await CarService.createCar({marca, modelo, anio, puertas, color, transmision, existencia, precio});
    console.log(carsession)
    return carsession;

}

export default createCarResolver;