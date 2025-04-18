import { Injectable } from '@nestjs/common';
import { dateFormat } from '../common/utils';
import { DeviceService } from '../device/device.service';
import { CreateDeviceDto } from '../device/dto/create-device.dto';
import { UpdateDeviceDto } from '../device/dto/update-device.dto';

@Injectable()
export class ConsumerService {
  constructor(private readonly device: DeviceService) {}
  async createDevice(device: CreateDeviceDto) {
    device.createAt = dateFormat(new Date());
    device.updateAt = dateFormat(new Date());
    await this.device.create(device);
  }

  async updateDevice(device: UpdateDeviceDto) {
    device.updateAt = dateFormat(new Date());
    await this.device.update(device.serial, {
        ward: device.ward,
        hospital: device.hospital,
        staticName: device.staticName,
        name: device.name,
        status: device.status,
        firmware: device.firmware || '1.0.0',
        remark: device.remark,
        positionPic: device.positionPic
      }
    );
  }
}