import { Controller, Get } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Get()
    getUsersInfo():Promise<User[]> {
        return this.userService.findAll();
    }
}
