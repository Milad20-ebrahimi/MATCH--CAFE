import {
  createPayment,
  findPaymentByOrderId,
  updatePaymentStatus,
} from "../repositories/payment.repository.js";



export async function createOrderPayment(
  data: {
    orderId: string;
    amount: number;
    method?: string;
  }
) {

  const existingPayment =
    await findPaymentByOrderId(
      data.orderId
    );


  if (existingPayment) {

    return existingPayment;

  }


  return await createPayment(
    data
  );

}



export async function getOrderPayment(
  orderId: string
) {

  return await findPaymentByOrderId(
    orderId
  );

}



export async function payOrder(
  paymentId: string,
  transactionId: string
) {

  return await updatePaymentStatus(
    paymentId,
    "paid",
    transactionId
  );

}