import {
  createPayment,
  findPaymentByOrderId,
  updatePaymentStatus,
  findAllPayments,
} from "../repositories/payment.repository.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";

type Database = NodePgDatabase<any>;
 export async function createOrderPayment(
  data: {
    orderId: string;
    amount: number;
    method?: string;
  },
  tx?: Database
) {

  try {

    const existingPayment =
      await findPaymentByOrderId(
        data.orderId
      );


    if (existingPayment) {
      return existingPayment;
    }


return await createPayment(
  data,
  tx
);

  } catch (error) {

    console.log(
      "PAYMENT ERROR:",
      error
    );

    throw error;

  }

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

  const payment =
    await updatePaymentStatus(
      paymentId,
      "paid",
      transactionId
    );


  if (!payment) {
    throw new Error(
      "Payment not found"
    );
  }


  return payment;

}
export async function getAllPayments() {

  return await findAllPayments();

}
export async function changePaymentStatus(
  paymentId: string,
  status:
    | "pending"
    | "paid"
    | "failed"
    | "refunded",
  transactionId?: string
) {

  const payment =
    await updatePaymentStatus(
      paymentId,
      status,
      transactionId
    );


  if (!payment) {
    throw new Error(
      "Payment not found"
    );
  }


  return payment;

}