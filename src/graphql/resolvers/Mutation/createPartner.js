import PartnerService from "#root/adapters/PartnerService"

const createPartnerResolver = async (_, {input}, ctx)=>{
   
    const {name, parent_id, vat, website, street, street2, city, email, phone, mobile} = input;
    const partnerSession = await PartnerService.createPartner({name, parent_id, vat, website, street, street2, city, email, phone, mobile})
    console.log(partnerSession[0])
    return partnerSession;
  
}

export default createPartnerResolver