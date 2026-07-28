import type {
  Request,
  Response,
} from "express";


import {
  getPayments,
  changeAdminPaymentStatus,
} from "../services/admin-payment.service.js";



export async function getAllPaymentsController(
  req: Request,
  res: Response
) {

  const payments =
    await getPayments();


  res.json({
    payments,
  });

}




export async function updatePaymentStatusController(
  req: Request,
  res: Response
) {
const id = req.params.id as string;


  const {
    status,
    transactionId,
  } = req.body;



  const payment =
    await changeAdminPaymentStatus(
      id,
      status,
      transactionId
    );



  res.json({
    message:
      "Payment status updated",

    payment,
  });

}