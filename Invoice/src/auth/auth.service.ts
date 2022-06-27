import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {User} from '../users/users.entity';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
    constructor (private userservice:UsersService,
        private jwtservice:JwtService){}
    async validateuser(Username:string,password:string): Promise<any>{
        const user= await this.userservice.finduser(Username);
        if(user&&user.password===password){
            const {password,...rest}=user;
             return rest;
        }
        return null;
    }
    async login(User:any){
        const payload={Action:'ACCESSTOKEN',Username:User.Username,id:User.id,app_key:'Secret'}
        return{
            access_token:this.jwtservice.sign(payload),  // Cannot add value into jwt header 
        };

    }
}
