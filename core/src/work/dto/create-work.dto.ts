import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWorkDto {
  @IsNotEmpty()
  @IsNumber()
  groupId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  dueDate: string;
}
