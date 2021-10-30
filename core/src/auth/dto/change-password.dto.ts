import { IsNotEmpty, IsString } from 'class-validator';

export default class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  old: string;

  @IsNotEmpty()
  @IsString()
  new: string;
}
