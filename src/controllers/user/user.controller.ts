import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return `User: ${userId}`;
  }
}
