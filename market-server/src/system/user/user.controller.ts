import { Query } from '@nestjs/common';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/core/decorator';
import { LoginUserDto, CreateUserDto } from './dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
        ) {
            
    }

    @Get()
    @Roles('admin')
    async getUsersInfo(): Promise<Observable<{ code: number; data: any[]; message: string; }>> {
        let userList = await this.userService.findAll();
        return of({ code: 200, data: userList, message: 'success' });
    }

    @UseGuards(new JwtGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req,@Query('username') username) {
        // verify username
        if(username == req.user.username){
            return {code: 200, message:'success',data:null}
        }else{
            return {code:201,message:'error',data:null}
        }
    }

}
