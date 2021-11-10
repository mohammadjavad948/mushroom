import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsBoolean()
  isPrivate: boolean;

  @IsNotEmpty()
  @IsBoolean()
  waitForAdminAccept: boolean
}
