import PartnerService from "#root/adapters/PartnerService"

const createPartnerResolver = async (_, {input}, ctx)=>{
   
 
         //console.log(input)
    const {name, parent_id, vat, website, street, street2, city, email, phone, mobile} = input;
    const partnerSession = await PartnerService.createPartner({name, parent_id, vat, website, street, street2, city, email, phone, mobile})
    //const fin = partnerSession.forEach(header);
   // return ar
   console.log(partnerSession)
    return partnerSession[0].name 
    
    
    
    
  
}

export default createPartnerResolver