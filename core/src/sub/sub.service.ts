import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {HelperService} from "../helper/helper.service";

@Injectable()
export class SubService {
    constructor(private database: DatabaseService, private helper: HelperService) {}

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

    async sub(userId: number, groupId: number){
        const isSubbed = await this.helper.isSubbed(userId, groupId);

        if (isSubbed){
            throw new HttpException('subbed', 403);
        }

        const canView = this.helper.canViewGroup(userId, groupId);

        if (!canView){
            throw new HttpException('nope', 403);
        }

        return this.database.subscription.create({
            data: {
                groupId: groupId,
                userId: userId,
            }
        })
    }

    async unsub(userId: number, groupId: number){
        const isSubbed = await this.helper.isSubbed(userId, groupId);

        if (!isSubbed){
            throw new HttpException('not subbed', 403);
        }

        return this.database.subscription.deleteMany({
            where: {
                userId: userId,
                groupId: groupId
            }
        })
    }
}
