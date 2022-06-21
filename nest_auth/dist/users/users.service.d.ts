import { Repository } from 'typeorm';
import { UserDto } from './users.dto';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    postUser(userDto: UserDto): Promise<User>;
    getUsers(user: User): Promise<User[]>;
    getUser(_id: number): Promise<User[]>;
}
