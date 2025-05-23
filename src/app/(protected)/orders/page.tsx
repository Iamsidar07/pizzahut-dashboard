import Container from "@/components/Container";
import DisplayOrders from "@/components/orders/DisplayOrders";
import { getOrders } from "@/lib/order";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pizza Orders'
}

export default async function OrdersPage() {
  const orders = await getOrders();
  return (
    <Container className="p-4 pt-8 lg:pt-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold  mb-8">
        Pizza Orders 🍕
      </h1>
      <DisplayOrders orders={orders}/>
    </Container>
  );
}
