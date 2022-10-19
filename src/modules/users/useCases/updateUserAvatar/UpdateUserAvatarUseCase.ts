import { deleteFile } from '@utils/file';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/IUserRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const { avatar } = await this.usersRepository.findById(user_id);

    if (avatar) {
      await deleteFile(`./tmp/avatar/${avatar}`);
    }

    await this.usersRepository.pathAvatar({
      id: user_id,
      avatarFileName: avatar_file,
    });
  }
}

export { UpdateUserAvatarUseCase };
