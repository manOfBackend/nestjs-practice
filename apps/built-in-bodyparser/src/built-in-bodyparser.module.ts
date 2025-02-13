import { Module } from '@nestjs/common';
import { BuiltInBodyparserController } from './built-in-bodyparser.controller';
import { BuiltInBodyparserService } from './built-in-bodyparser.service';

@Module({
  imports: [],
  controllers: [BuiltInBodyparserController],
  providers: [BuiltInBodyparserService],
})
export class BuiltInBodyparserModule {}
