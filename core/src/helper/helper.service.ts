import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class HelperService {
    constructor(private database: DatabaseService) {}

    async canManageGroup(userId: number, groupId: number){
        const group = await this.database.workGroup.count({
            where: {
                id: groupId,
                creatorId: userId,
            }
        });

        return group > 0
    }

    async canViewGroup(userId: number, groupId: number){
        const sub = await this.database.subscription.count({
            where: {
                userId,
                groupId
            }
        });

        const group = await this.database.workGroup.count({
            where: {
                id: groupId,
                creatorId: userId,
            }
        });

        return sub > 0 || group > 0
    }
}
