import PartnerService from "#root/adapters/PartnerService"

const createPartnerResolver = async (_, {input}, ctx)=>{
   
    const {name, parent_id, vat, website, street, street2, city, email, phone, mobile} = input;
    const partnerSession = await PartnerService.createPartner({name, parent_id, vat, website, street, street2, city, email, phone, mobile})
    console.log(partnerSession[0])
    return {
        name: partnerSession[0].name, 
        street: partnerSession[0].street, 
        street2: partnerSession[0].street2, 
        city: partnerSession[0].city, 
        email: partnerSession[0].email, 
        phone: partnerSession[0].phone, 
        mobile: partnerSession[0].mobile
    }
  
}

export default createPartnerResolver