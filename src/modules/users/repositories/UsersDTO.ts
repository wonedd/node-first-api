export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
  avatar?: string;
  id?: string;
}

export interface IUpdateAvatarDTO {
  id: string;
  avatarFileName: string;
}
