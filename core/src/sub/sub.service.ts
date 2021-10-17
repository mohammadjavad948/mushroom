import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class SubService {
    constructor(private database: DatabaseService) {}

    async allSubs(userId: number){

        return this.database.workGroup.findMany({
            where: {
                subscribers: {
                    some: {
                        userId: userId,
                    }
                }
            }
        })
    }
}
