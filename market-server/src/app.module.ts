import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './system/auth/auth.module';
import { RoleModule } from './system/role/role.module';
import { UserModule } from './system/user/user.module';

const SYSTEM_MODULES = [
  UserModule,
  RoleModule
]
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test',{
      useNewUrlParser: true,
      user: 'test',
      pass: "123456"
    }),
    ...SYSTEM_MODULES,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
