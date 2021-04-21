import  PartnerService from "#root/adapters/PartnerService";

const PartnerResolver = async () =>{
    return await PartnerService.fetchPartner();   
};

export default PartnerResolver;