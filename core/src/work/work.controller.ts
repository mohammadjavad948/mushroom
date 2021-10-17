import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { HttpAuthGuard } from '../auth/http-auth.guard';
import { Request } from '../types/request';

@UseGuards(HttpAuthGuard)
@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  create(@Body() createWorkDto: CreateWorkDto, @Req() req: Request) {
    return this.workService.create(createWorkDto, req.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.workService.findOne(+id, req.userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkDto: UpdateWorkDto,
    @Req() req: Request,
  ) {
    return this.workService.update(+id, updateWorkDto, req.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.workService.remove(+id, req.userId);
  }
}
