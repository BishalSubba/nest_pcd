import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {constants} from "buffer";
import{ExtractJwt, Strategy} from 'passport-jwt'
import {jwtsecret} from "./constan";
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtsecret.secret,
        });
    }
    async validate(payload: any) {
    return {Action:payload.Action,Username:payload.Username,id:payload.id,app_key:payload.app_key}
    }
}