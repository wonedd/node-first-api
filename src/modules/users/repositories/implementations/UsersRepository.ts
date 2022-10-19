import { User } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { IUsersRepository } from '../IUserRepository';
import { ICreateUserDTO, IUpdateAvatarDTO } from '../UsersDTO';

export class UsersRepository implements IUsersRepository {
  private ormRepository = prisma.user;

  public async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      data: {
        name,
        email,
        password,
        driver_license,
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

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  public async pathAvatar({
    id,
    avatarFileName,
  }: IUpdateAvatarDTO): Promise<User> {
    const user = await this.ormRepository.update({
      where: {
        id,
      },
      data: {
        avatar: avatarFileName,
      },
    });

    return user;
  }
}
