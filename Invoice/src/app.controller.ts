import {Body, HttpServer, Post,Request} from '@nestjs/common';
import {UseGuards} from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import {response} from 'express';
import {Http2ServerRequest} from 'http2';
import {get} from 'https';
import {userInfo} from 'os';
import {lastValueFrom, map, Observable} from 'rxjs';
import {threadId} from 'worker_threads';
import { AppService } from './app.service';
import {AuthService} from './auth/auth.service';
import {JwtAuthGuard} from './auth/jwt_auth';
import {Localauth} from './auth/local-authguard';
import {User} from './users/users.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('login')
  @UseGuards(Localauth)
  async login(@Request() req){
    const data=this.authService.login(req.user);
    const p=Promise.resolve(data);
   const d= await p.then(value => {
      return value
    }).catch(err => {
      console.log(err);
    })
    console.log(d);
     return this.appService.check(d)

}
  @Get('detail')
  @UseGuards(JwtAuthGuard)
  show(@Request() req){
    return req.user;
  }
 @Post('token')
 showtoken(@Body() data){
  return data;
 }
}
