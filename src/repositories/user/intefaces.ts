import { DeleteResult, UpdateResult } from "typeorm"

interface IUser {
    id: string
    name: string,
    email: string
    password: string
    isAdmin: boolean
    createdOn: string
    updatedOn: string
}

interface IUserRepo {
    saveUser: (user: IUser) => Promise<IUser>
    findUsers: () => Promise<IUser[]>
    findByEmail: (email: string) => Promise<IUser[]>
    findById: (id: string) => Promise<IUser[]>
    updateUser: (user: IUser, res: object) => Promise<UpdateResult>
    deleteUser: (id: string) => Promise<DeleteResult>
}

export { IUser, IUserRepo }