"use client";

import { useMobile } from "@/hooks/useMobile";
import { PizzaOrder } from "@/types/order";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import OrderCard from "./OrderCard";

const DisplayOrders = ({ orders }: { orders: PizzaOrder[] }) => {
  const isMobile = useMobile();
  if (isMobile)
    return (
      <div className="space-y-2">
        {orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    );
  return <DataTable columns={columns} data={orders} />;
};

export default DisplayOrders;
