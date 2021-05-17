import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return `User: ${userId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Create action`,
      payload,
    };
  }
}
