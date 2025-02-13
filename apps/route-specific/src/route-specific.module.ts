import { Module } from '@nestjs/common';
import { RouteSpecificController } from './route-specific.controller';
import { RouteSpecificService } from './route-specific.service';

@Module({
  imports: [],
  controllers: [RouteSpecificController],
  providers: [RouteSpecificService],
})
export class RouteSpecificModule {}
