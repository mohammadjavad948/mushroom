import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req} from '@nestjs/common';
import { WorkGroupService } from './work-group.service';
import { CreateWorkGroupDto } from './dto/create-work-group.dto';
import { UpdateWorkGroupDto } from './dto/update-work-group.dto';
import {HttpAuthGuard} from "../auth/http-auth.guard";
import {Request} from "../types/request";

@UseGuards(HttpAuthGuard)
@Controller('work-group')
export class WorkGroupController {
  constructor(private readonly workGroupService: WorkGroupService) {}

  @Post()
  create(@Body() createWorkGroupDto: CreateWorkGroupDto, @Req() req: Request) {
    return this.workGroupService.create(createWorkGroupDto, req.userId);
  }

  @Get()
  findAll() {
    return this.workGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkGroupDto: UpdateWorkGroupDto) {
    return this.workGroupService.update(+id, updateWorkGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workGroupService.remove(+id);
  }
}
