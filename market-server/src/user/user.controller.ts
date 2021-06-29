import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Get()
    async getUsersInfo():Promise<Observable<{ code: number; data: any[]; message: string; }>> {
        let userList = await this.userService.findAll();
        console.log(userList);
        return of({code:200,data:userList,message:'success'});
        // return this.userService.findAll();
    }
}
