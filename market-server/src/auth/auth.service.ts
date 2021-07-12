import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) {

    }

    async getToken(username: string, password: string): Promise<any> {
        const user: JwtPayload = { username: username, password: password };
        return this.jwtService.sign(user, { secret: jwtConstants.secret, expiresIn: '30 days' });
    }

}
