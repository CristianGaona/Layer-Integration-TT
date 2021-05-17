import OrderService from '#root/adapters/OrderService'

const createOrderResolver = async(_, {input}, ctx)=>{
    const { wishes, id_client, status, total } = input
    const id_sale= ctx.user.uid
    const ordersession = await OrderService.createOrder({wishes, id_client, id_sale, total, status})
    return ordersession;

};

export default createOrderResolver;