import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto,LoginUserDto } from './dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOne(body:any): Promise<any>{
        let user = await this.userModel.findOne(body);
        return user;
    }

    async createUser(loginUserDto:LoginUserDto): Promise<User>{
        let user = new this.userModel(loginUserDto);
        return user.save();
    }

}
