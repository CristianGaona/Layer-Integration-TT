import  CarService from "#root/adapters/CarService";

const getCarIdResolver = async (_, {id}, ctx) =>{
    return await CarService.getCarId(id)

}

export default getCarIdResolver;