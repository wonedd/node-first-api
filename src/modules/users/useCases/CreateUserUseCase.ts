import { AppError } from '@errors/AppError';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
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
    const passwordHash = await hash(password, 8);

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const user = await this.usersRepository.create({
      username,
      name,
      email,
      password: passwordHash,
      driver_license,
    });

    return user;
  }
}
