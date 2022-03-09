import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuservice: CpuService,
    private diskservice: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuservice.compute(1, 2), this.diskservice.getData()];
  }
}
