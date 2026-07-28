import {
  eq,
  desc,
} from "drizzle-orm";
import { db } from "../database/index.js";
import {
  payments,
} from "../database/schema/payment.schema.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";

type Database = NodePgDatabase<any>;
export async function createPayment(
  data: {
    orderId: string;
    amount: number;
    method?: string;
  },
  tx: Database = db
) {

  const payment =
    await tx
      .insert(payments)
      .values({
        orderId:
          data.orderId,

        amount:
          data.amount,

        method:
          data.method ?? null,
      })
      .returning();


  return payment[0];

}



export async function findPaymentByOrderId(
  orderId: string
) {

  const payment =
    await db
      .select()
      .from(payments)
      .where(
        eq(
          payments.orderId,
          orderId
        )
      )
      .limit(1);


  return payment[0] ?? null;

}



export async function updatePaymentStatus(
  id: string,
  status:
    | "pending"
    | "paid"
    | "failed"
    | "refunded",
  transactionId?: string
) {

  const payment =
    await db
      .update(payments)
      .set({
        status,

        transactionId:
          transactionId ?? null,
      })
      .where(
        eq(
          payments.id,
          id
        )
      )
      .returning();


  return payment[0] ?? null;

}
export async function findAllPayments() {

  return await db
    .select()
    .from(payments)
    .orderBy(
      desc(payments.createdAt)
    );

}