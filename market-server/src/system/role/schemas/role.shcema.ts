import { Prop ,Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RoleDocument = Role & Document;

@Schema()
export class Role extends Document{
    @Prop()
    id:number;

    @Prop()
    introduction: string;

    @Prop()
    headurl: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
