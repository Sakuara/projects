import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';
import { Roles } from 'src/core/decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Get()
    @Roles('admin')
    async getUsersInfo():Promise<Observable<{ code: number; data: any[]; message: string; }>> {
        let userList = await this.userService.findAll();
        return of({code:200,data:userList,message:'success'});
    }

    @Post()
    @ApiBody({type: [CreateUserDto]})
    async createUser(@Body() createUserDto:CreateUserDto):Promise<Observable<{code:number;data:User;message:string}>>{
        let user = await this.userService.findOne({username:createUserDto.username});
        if(user){
            return of({code:200,data:null,message:'用户名已存在'});
        }
        let result =await this.userService.createUser(createUserDto);
        return of({code:200,data:result,message:'success'});
    }
}
