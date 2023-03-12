import { MailTrapMailProvider } from "../../providers/implementation/MailTrapMailProvider ";
import { MongodbUsersRepository } from "../../repositories/implementation/mongodbUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongodbUsersRepository = new MongodbUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  mongodbUsersRepository,
  mailTrapMailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController };