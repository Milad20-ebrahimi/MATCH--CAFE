export type OrderStatus =
  | "pending"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";
export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string;
  createdAt: string;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  customerId: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
};
