import { Module } from '@nestjs/common';
import { JokenorrisService } from './jokenorris.service';

@Module({
  providers: [JokenorrisService],
  exports: [JokenorrisService],
})
export class JokenorrisModule {}
