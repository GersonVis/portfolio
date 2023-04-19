import { IUser } from "../modules/shared/models/user.model"

export const environment={
    production: false,
    base_uri: "http://localhost:8080"
}
export const user_recv:IUser={
    user_id: 1,
    email: "gerson@gmail.com"
}