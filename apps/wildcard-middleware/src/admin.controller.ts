import { Controller, Get, Param } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get(':id')
  getAdmin(@Param('id') id: string) {
    return { adminId: id };
  }

  @Get()
  getAdmins() {
    return [{ id: 1, name: 'Admin User' }];
  }
}
