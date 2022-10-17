/* eslint-disable no-console */
import { ICreateCategoryDTO } from '@modules/category/repositories/CategoriesDTO';
import { ICategoriesRepository } from '@modules/category/repositories/ICategoriesRepository';
import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      console.log('Category already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
