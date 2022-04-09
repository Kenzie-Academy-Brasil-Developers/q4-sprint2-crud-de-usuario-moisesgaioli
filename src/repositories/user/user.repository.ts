import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./intefaces";



class UserRepository implements IUserRepo {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User)
    }

    saveUser = async (user: IUser) => await this.ormRepository.save(user)
    findUsers = async () => await this.ormRepository.find()
    findByEmail = async (email: string) => await (this.ormRepository.find({ email: email }))
    findById = async (id: string) => await (this.ormRepository.find({ id: id }))
    updateUser = async (user: IUser, reqBody: object) => await (this.ormRepository.update(user, reqBody))
    deleteUser = async (id: string) => await (this.ormRepository.delete(id))
}


export default UserRepository