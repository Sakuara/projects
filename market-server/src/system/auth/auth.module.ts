import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/system/user/user.module';
import { UserService } from 'src/system/user/user.service';
import { AuthService } from './auth.service';
import { jwtConstants } from '../../core/constants/constants';
import { JwtStrategy } from './jwt. strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1 day'
      }
    })
  ],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
