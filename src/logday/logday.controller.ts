import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, HttpStatus, HttpCode, Request } from '@nestjs/common';
import { LogdayService } from './logday.service';
import { CreateLogdayDto } from './dto/create-logday.dto';
import { UpdateLogdayDto } from './dto/update-logday.dto';
import { DeviceJwtAuthGuard, JwtAuthGuard, RolesGuard } from '../common/guards';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { DevicePayloadDto } from '../common/dto';

@Controller('logday')
export class LogdayController {
  constructor(private readonly logdayService: LogdayService) {}

  @Post()
  @UseGuards(DeviceJwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createLogdayDto: CreateLogdayDto | CreateLogdayDto[] , @Request() req: { user: DevicePayloadDto }) {
    return this.logdayService.create(createLogdayDto, req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.logdayService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER, Role.SERVICE)
  async update(@Param('id') id: string, @Body() updateLogdayDto: UpdateLogdayDto) {
    return this.logdayService.update(id, updateLogdayDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER, Role.SERVICE)
  async remove(@Param('id') id: string) {
    return this.logdayService.remove(id);
  }
}
