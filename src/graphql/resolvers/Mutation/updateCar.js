import CarService from "#root/adapters/CarService"

const updateCarResolver = async (_, { id,input }, ctx)=>{
    console.log(input)
    const {marca, modelo, anio, puertas, color, transmision, existencia, precio} = input;
    const carsession = await CarService.updateCar({id, marca, modelo, anio, puertas, color, transmision, existencia, precio})
    console.log(carsession)
    return carsession;


}

export default updateCarResolver;