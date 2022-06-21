import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { OrderDto } from './orders.dto';
export declare class OrdersService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    postOrder(orderDto: OrderDto): Promise<OrderDto & Order>;
    getOrders(order: Order): Promise<Order[]>;
    getOrder(_name: string): Promise<Order[]>;
    updateOrder(order: Order): Promise<void>;
    deleteOrder(order: Order): Promise<void>;
}
