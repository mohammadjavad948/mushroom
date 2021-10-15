import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkGroupDto } from './create-work-group.dto';

export class UpdateWorkGroupDto extends PartialType(CreateWorkGroupDto) {}
