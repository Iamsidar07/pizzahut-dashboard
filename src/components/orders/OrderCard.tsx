import { OrderStatus, PizzaOrder } from "@/types/order";

function getBadgeFromStatus(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.PENDING:
      return "bg-gray-100 text-gray-900";
    case OrderStatus.PREPARING:
      return "bg-blue-100 text-blue-900";
    case OrderStatus.OUT_FOR_DELIVERY:
      return "bg-orange-100 text-orange-900";
    case OrderStatus.DELIVERED:
      return "bg-green-100 text-green-900";
    case OrderStatus.CANCELLED:
      return "bg-red-100 text-red-900";
    default:
      return "bg-gray-100 text-red-900";
  }
}

const OrderCard = ({ order }: { order: PizzaOrder }) => {
  return (
    <div className="max-w-sm mx-auto p-4 border bg-white shadow-sm">
      <h2 className="font-semibold mb-2 !font-body">{order.orderId}</h2>
      <h3 className="font-bold mb-4 !font-body">Order Details</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Customer Name</span>
          <span>{order.customerName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Pizza Type</span>
          <span>{order.pizzaType}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Quantity</span>
          <span>{order.quantity}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Order Date</span>
          <span>{order.orderDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Status</span>
          <span
            className={`px-2 py-1 rounded-md font-semibold text-xs ${getBadgeFromStatus(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
