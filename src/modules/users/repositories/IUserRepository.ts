import { User } from '@prisma/client';

import { ICreateUserDTO, IUpdateAvatarDTO } from './UsersDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  // findAll(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  pathAvatar(data: IUpdateAvatarDTO): Promise<User>;
  // delete(id: string): Promise<void>;
}
