import Container from "@/components/Container";
import DisplayOrders from "@/components/orders/DisplayOrders";
import { getOrders } from "@/lib/order";

export default async function OrdersPage() {
  const orders = await getOrders();
  return (
    <Container className="p-4 pt-8 lg:pt-20">
      <h1 className="text-2xl lg:text-5xl mb-6">Pizza Orders</h1>
      <DisplayOrders orders={orders}/>
    </Container>
  );
}
