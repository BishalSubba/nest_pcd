import { Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './users.dto';
import { User } from './users.entity';
@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    postUser(userDto:UserDto){
       const e=this.usersRepository.create(userDto)
       return this.usersRepository.save(e)
   }
   

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find({select: ["id","name", "email"]});
    }
    
    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id","name", "email", "password"],
            where: [{ "id": _id }]
        });
    }
}
