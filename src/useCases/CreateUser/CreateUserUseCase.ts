import { IUsersRepository } from "../../repositories/IUsersReṕository";
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvaider";
export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvaidder: IMailProvider,
  ) {
  }
  async execute(data: ICreateUserDTO) {
    const  userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)
    await this.usersRepository.save(user)

    await this.mailProvaidder.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<você já pode fazer login em nossa plataforma',
    })
  }
} 