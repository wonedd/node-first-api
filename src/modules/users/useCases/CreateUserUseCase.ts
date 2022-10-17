/* eslint-disable no-console */
import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUserRepository';
import { ICreateUserDTO } from '../repositories/UsersDTO';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    username,
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      console.log('User already exists');
    }

    const user = await this.usersRepository.create({
      username,
      name,
      email,
      password,
      driver_license,
    });

    return user;
  }
}
