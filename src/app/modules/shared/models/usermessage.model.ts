import { IMessage } from "./message.model";
import { IUser } from "./user.model";

export interface IUserMessage{
     message: IMessage,
     user_send: IUser,
     user_recv: IUser
}