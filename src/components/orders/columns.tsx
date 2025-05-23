"use client";

import { OrderStatus, PizzaOrder, PizzaType } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

function getBadgeFromPizzaType(type: PizzaType): string {
  switch (type) {
    case "Margherita":
      return "bg-green-50 text-green-900";
    case "Pepperoni":
      return "bg-red-100 text-red-900";
    case "Veggie Supreme":
      return "bg-yellow-100 text-yellow-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
}

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

export const columns: ColumnDef<PizzaOrder>[] = [
  {
    accessorKey: "orderId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "pizzaType",
    header: "Pizza Type",
    cell: ({ row }) => {
      const pizzaType = row.original.pizzaType as PizzaType;
      return (
        <Badge
          variant={"outline"}
          className={cn("shadow-none", getBadgeFromPizzaType(pizzaType))}
        >
          {pizzaType}
        </Badge>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "orderDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.orderDate);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status as OrderStatus;
      return (
        <Badge
          variant={"outline"}
          className={cn("shadow-none", getBadgeFromStatus(status))}
        >
          {status}
        </Badge>
      );
    },
  },
];
