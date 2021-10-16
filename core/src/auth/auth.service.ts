import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {sign, verify} from "jsonwebtoken";
import {ConfigService} from "@nestjs/config";
import {TokenPayloadI} from "../types/token";
import {compare, hash} from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private database: DatabaseService,  private config: ConfigService) { }

    async login(username: string, password: string){
        const user = await this.database.user.findFirst({
            where: {
                username: username,
            },
        });

        if (!user){
            throw new HttpException('username or password not correct', 404);
        }

        await this.checkPassword(password, user.password);

        return {
            token: this.generateToken({id: user.id})
        }
    }

    async signUp(username: string, password: string){
        const user = await this.database.user.findFirst({
            where: {
                username: username,
            },
        });

        if (user){
            throw new HttpException('username exists', 403);
        }

        const hashed = await hash(password, 10);

        return this.database.user.create({
            data: {
                username: username,
                password: hashed,
            }
        });
    }

    async checkPassword(password: string, hashedPassword: string){
        try {
            return await compare(password, hashedPassword)
        } catch (e){
            throw new HttpException('username or password not correct', 404);
        }
    }

    generateToken(payload: TokenPayloadI){
        return sign(payload, this.config.get('SECRET'))
    }

    checkToken(token: string): Promise<TokenPayloadI>{
        return new Promise<TokenPayloadI>((resolve, reject) => {
            try {
                const user = verify(token, this.config.get('SECRET')) as TokenPayloadI

                resolve(user);
            } catch (e){
                reject(e)
            }
        })
    }

    userInfo(userId: number){
        return this.database.user.findFirst({
            where: {
                id: userId,
            }
        })
    }
}
