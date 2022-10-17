import { CreateCategoryController } from '@modules/category/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '@modules/category/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/category/useCases/listCategories/ListCategoriesController';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();

const upĺoad = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

const importCategoriesController = new ImportCategoriesController();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upĺoad.single('file'),
  importCategoriesController.handle,
);
export { categoriesRoutes };
