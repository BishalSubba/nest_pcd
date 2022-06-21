import { UsersService } from './users.service';
import { User } from './users.entity';
import { UserDto } from './users.dto';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    postUser(UserDto: UserDto): Promise<User>;
    getUsers(user: User): Promise<User[]>;
    get(params: any): Promise<User[]>;
}
