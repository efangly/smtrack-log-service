import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, HttpCode, Request, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { DeviceJwtAuthGuard, JwtAuthGuard, RolesGuard } from '../common/guards';
import { DevicePayloadDto, JwtPayloadDto } from '../common/dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @UseGuards(DeviceJwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createNotificationDto: CreateNotificationDto, @Request() req: { user: DevicePayloadDto }) {
    return this.notificationService.create(createNotificationDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Request() req: { user: JwtPayloadDto }) {
    return this.notificationService.findAll(req.user);
  }

  @Get('dashboard/count')
  @UseGuards(JwtAuthGuard)
  async findDashboard(@Request() req: { user: JwtPayloadDto }) {
    return this.notificationService.findCount(req.user);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER, Role.SERVICE)
  async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER, Role.SERVICE)
  async remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }
}
