import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LogdayModule } from './logday/logday.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { NotificationModule } from './notification/notification.module';
import { DeviceStrategy, JwtStrategy } from './common/strategies';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { DeviceModule } from './device/device.module';
import { HealthModule } from './health/health.module';
import { InfluxdbModule } from './influxdb/influxdb.module';
import { GraphModule } from './graph/graph.module';
import { ConsumerModule } from './consumer/consumer.module';
import { CronModule } from './cron/cron.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MobileModule } from './mobile/mobile.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    PassportModule,
    LogdayModule,
    RabbitmqModule,
    NotificationModule,
    PrismaModule,
    RedisModule,
    DeviceModule,
    HealthModule,
    InfluxdbModule,
    GraphModule,
    ConsumerModule,
    CronModule,
    MobileModule
  ],
  providers: [JwtStrategy, DeviceStrategy]
})
export class AppModule {}
