import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UserDto } from './users.dto';


@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    @Post('add')
    postUser(@Body()UserDto: UserDto){
    return this.service.postUser(UserDto);
    }


    @Get()
    async getUsers(@Body()user: User) {
        return this.service.getUsers(user);
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.finduser(params.id);
    }
}
