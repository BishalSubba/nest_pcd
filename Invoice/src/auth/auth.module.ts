import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '../users/users.entity';
import {UsersModule} from '../users/users.module';
import { AuthService } from './auth.service';
import {jwtsecret} from './constan';
import {jwtStrategy} from './jwt.strategy';
import {LocalStratege} from './local.strategy';

@Module({
  imports:[UsersModule,PassportModule,JwtModule.register({
    secret:jwtsecret.secret,
    signOptions:{ expiresIn: '120s' }
  }),TypeOrmModule.forFeature([User])],
  providers: [AuthService,LocalStratege,jwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
