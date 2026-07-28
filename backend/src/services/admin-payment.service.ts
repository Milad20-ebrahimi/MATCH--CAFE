import {
  getAllPayments,
  changePaymentStatus,
} from "./payment.service.js";


export async function getPayments() {

  return await getAllPayments();

}



export async function changeAdminPaymentStatus(
  paymentId: string,
  status:
    | "pending"
    | "paid"
    | "failed"
    | "refunded",
  transactionId?: string
) {

  return await changePaymentStatus(
    paymentId,
    status,
    transactionId
  );

}