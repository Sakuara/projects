// import * as mongoose from "mongoose";

import { Prop ,Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;
// export const UserSchema = new mongoose.Schema(
//     {
//         id: Number,
//         name: String,
//         introduction: String,
//         headurl: String,
//         bigurl: String,
//         username: String,
//         password: String,
//     },{
//         collection: 'user'
//     }
// )

@Schema()
export class User{
    @Prop()
    id:number;

    @Prop()
    name:string;

    @Prop()
    introduction: string;

    @Prop()
    headurl: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);