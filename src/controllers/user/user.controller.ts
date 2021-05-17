import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':userId')
  update(@Param('userId') userId: string, @Body() payload: any) {
    return {
      userId,
      payload,
    };
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return {
      userId,
    };
  }
}
