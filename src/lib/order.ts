import { OrderStatus, PizzaOrder, PizzaType } from "@/types/order";
import ORDERS from "@/data/orders.json"

export const getOrders = async (): Promise<PizzaOrder[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ORDERS as PizzaOrder[]);
        }, 500);
    });
};

