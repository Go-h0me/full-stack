import { getModelForClass, Prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class Token {
  _id!: mongoose.Types.ObjectId;

  @Prop({ required: true })
  userId!: string;

  @Prop({ required: true })
  token!: string;

  @Prop({ default: Date.now, expires: 60 * 5 })
  createdAt: Date;
}




export const TokenModel =getModelForClass(Token)