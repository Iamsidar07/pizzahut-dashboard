"use client";

import { PizzaOrder } from "@/types/order";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

const DisplayOrders = ({ orders }: { orders: PizzaOrder[] }) => {
  return <DataTable columns={columns} data={orders} />;
};

export default DisplayOrders;
