import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersReṕository";

export class MongodbUsersRepository implements IUsersRepository {
  private _users: User[] = []
  async findByEmail(email: string): Promise<User> {
    const user = await this._users.find(user => user.email === email)
    return user;
  }

  async save(user: User): Promise<void> {
    this._users.push(user)
  }
}