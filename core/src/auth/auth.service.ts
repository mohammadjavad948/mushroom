import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {verify} from "jsonwebtoken";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private database: DatabaseService,  private config: ConfigService) { }

    checkToken(token: string){
        return verify(token, this.config.get('SECRET'))
    }
}
