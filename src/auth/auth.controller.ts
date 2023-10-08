import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUserDto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() req:any) {
    console.log("Inside Controller");
    return 'This is protected data.';
    return await this.authService.login(req);
  }

  // @Post('register')
  // async registerUser(@Body() createUserDto: CreateUserDto) {
  //   return await this.userService.create(createUserDto);
  // }

  // @UseGuards(RefreshJwtGuard)
  // @Post('refresh')
  // async refrshToken(@Request() req) {
  //   return this.authService.refreshToken(req.user);
  // }
}
