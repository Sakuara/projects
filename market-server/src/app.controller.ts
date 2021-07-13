import { Body, Controller, Get, Post } from '@nestjs/common';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { AuthService } from './system/auth/auth.service';
import { LoginUserDto } from './system/user/dto';
import { UserService } from './system/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  @Post('auth/login')
  async login(@Body() data: LoginUserDto):Promise<any> {
    let result = await this.userService.findOne({ username: data.username });
    if (result.errorCode) {
      return result;
    }
    if (result.password !== data.password) {
      return of({ code: 200, data: null, message: '密码错误' });
    }
    const tokenInfo = await this.authService.getToken(data.username, data.password);
    return of({ code: 0, data: {token:tokenInfo}, message: '登录成功' });
  }
}
