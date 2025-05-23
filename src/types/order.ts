export enum OrderStatus {
  PENDING = 'Pending',
  PREPARING = 'Preparing',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export type PizzaType = 'Margherita' | 'Pepperoni' | 'Veggie Supreme'

export interface PizzaOrder {
  orderId: string;
  customerName: string;
  pizzaType: PizzaType;
  quantity: number;
  orderDate: string;
  status: OrderStatus;
}

export interface OrdersData {
  orders: PizzaOrder[];
}