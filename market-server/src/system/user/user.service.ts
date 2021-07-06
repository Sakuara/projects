import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOne(body:any): Promise<User>{
        let user = await this.userModel.findOne(body);
        return user;
    }

    async createUser(createUserDto:CreateUserDto): Promise<User>{
        let user = new this.userModel(createUserDto);
        return user.save();
    }

    // async updateUserInfo(): Promise<User>{
    //     return this.userModel.updateOne({id:})
    // }
}
