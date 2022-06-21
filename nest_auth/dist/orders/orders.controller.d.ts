import { OrdersService } from './orders.service';
import { Order } from './orders.entity';
import { OrderDto } from './orders.dto';
export declare class OrdersController {
    private service;
    constructor(service: OrdersService);
    postOrder(orderDto: OrderDto): Promise<OrderDto & Order>;
    getOrders(order: Order): Promise<Order[]>;
    get(params: any): Promise<Order[]>;
    update(order: Order): Promise<void>;
    deleteOrder(params: any): Promise<void>;
}
