import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbService } from './db.service';


@Module({
  imports: [MongooseModule.forRoot('mongoodb://localhost:27017/test',{
    
  })],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
