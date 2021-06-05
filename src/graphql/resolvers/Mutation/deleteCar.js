import  CarService from "#root/adapters/CarService";

const DeleteCarResolver = async (_, {id}, ctx)=>{
    return await CarService.deleteCar(id);
}

export default DeleteCarResolver;