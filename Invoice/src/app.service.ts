import {HttpService} from '@nestjs/axios';
import {HttpServer, Injectable } from '@nestjs/common';
import {response} from 'express';
import {map} from 'rxjs';
import {invoicestatusdto} from './auth/invoice.status.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpservice:HttpService){}
  getHello(): string {
    return 'Hello World!';
  }
  check(data:any){
    return this.httpservice
    .post<any>('http://localhost:3000/token',data) //temp url
    .pipe(
      map((response)=>response.data))
  };
 
}
