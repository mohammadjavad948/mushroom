import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {sign, verify} from "jsonwebtoken";
import {ConfigService} from "@nestjs/config";
import {TokenPayloadI} from "../types/token";
import {compare} from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private database: DatabaseService,  private config: ConfigService) { }

    async login(username: string, password: string){
        const user = await this.database.user.findFirst({
            where: {
                username: username,
            },
        });
    }

    checkPassword(password: string, hashedPassword: string){
        return compare(password, hashedPassword);
    }

    generateToken(payload: TokenPayloadI){
        return sign(payload, this.config.get('SECRET'))
    }

    checkToken(token: string): Promise<TokenPayloadI>{
        return new Promise<TokenPayloadI>((resolve, reject) => {
            try {
                const user = verify(token, this.config.get('SECRET'))

                resolve(user);
            } catch (e){
                reject(e)
            }
        })
    }
}
