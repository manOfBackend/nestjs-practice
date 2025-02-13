import { Controller, Get, Param } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Get(':id')
  getJob(@Param('id') id: string) {
    return { id, title: `Job ${id}`, company: 'Tech Corp' };
  }
}
