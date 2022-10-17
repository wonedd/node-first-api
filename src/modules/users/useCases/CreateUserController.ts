import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      username,
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
