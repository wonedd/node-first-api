import { User } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { IUsersRepository } from '../IUserRepository';
import { ICreateUserDTO } from '../UsersDTO';

export class UsersRepository implements IUsersRepository {
  private ormRepository = prisma.user;

  public async create({
    name,
    email,
    password,
    driver_license,
    username,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      data: {
        name,
        email,
        password,
        driver_license,
        username,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
