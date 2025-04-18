import { IsString, IsBoolean, MaxLength, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateDeviceDto {
  @IsOptional()
  @IsString()
  @MaxLength(40)
  serial: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ward: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  hospital: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  staticName: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsNumber()
  seq: number;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  firmware: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  position: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  positionPic: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  remark: string;
  
  @IsDate()
  @IsOptional()
  createAt: Date;

  @IsDate()
  @IsOptional()
  updateAt: Date;
}
