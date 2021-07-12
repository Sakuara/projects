import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './schemas/role.shcema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Role.name,
      schema: RoleSchema,
      collection: 'role'
    }])
  ],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
