export function mapOrdersWithDetails(
  rows: any[]
) {

  const orders = new Map();


  for (const row of rows) {

    const orderId = row.order.id;


    if (!orders.has(orderId)) {

      orders.set(
        orderId,
        {
          ...row.order,

          user: row.user,

          items: [],
        }
      );

    }


    if (row.item) {

      orders
        .get(orderId)
        .items
        .push({

          ...row.item,

          product:
            row.product,

        });

    }

  }


  return Array.from(
    orders.values()
  );

}
