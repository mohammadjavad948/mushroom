import {Global, Module} from '@nestjs/common';
import {HelperService} from "./helper.service";

@Global()
@Module({
    providers: [HelperService]
})
export class HelperModule {}
