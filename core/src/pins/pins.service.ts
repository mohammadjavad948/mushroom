import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class PinsService {
    constructor(private database: DatabaseService) {}
}
