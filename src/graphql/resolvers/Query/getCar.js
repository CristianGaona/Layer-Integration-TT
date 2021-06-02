import CarService from "#root/adapters/CarService";

const GetCarResolver = async (obj,{},ctx) =>{
    return await CarService.getCars();
}

export default GetCarResolver;