import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {verify} from "jsonwebtoken";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private database: DatabaseService,  private config: ConfigService) { }

    async login(token: string){

    }

    generateToken(payload: {id: number}){

    }

    checkToken(token: string): Promise<{id: number}>{
        return new Promise<{id: number}>((resolve, reject) => {
            try {
                const user = verify(token, this.config.get('SECRET'))

                resolve(user);
            } catch (e){
                reject(e)
            }
        })
    }
}
