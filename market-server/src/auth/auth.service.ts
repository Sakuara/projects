import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/system/user/schemas/user.schema';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>,
    ) {

    }

    async validateAccount(payload: JwtPayload): Promise<any> {
        return this.userModel.findById(payload.id);
    }

    async finduserByAccount(account: string): Promise<User> {
        return this.userModel.findOne({ account: account });
    }
}
