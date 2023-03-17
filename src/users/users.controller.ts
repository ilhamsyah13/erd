import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UsersController {
  constructor(private authService: UsersService) {}
  @Post('/signup')
  public async signup(@Body() fields: any) {
    return this.authService.signup(fields);
  }
  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  public async signin(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  public async getProfile(@Request() req) {
    const { orderDetails, ...result } = req.user;
    return result;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/order')
  public async getOrder(@Request() req) {
    const { username, password, ...result } = req.user;
    return result;
  }
}
